import {inject} from '@loopback/core';
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
} from '@loopback/rest';

const SequenceActions = RestBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
  ) {}

  async handle(context: RequestContext) {
    try {
      const {request, response} = context;

      // CORS headers sempre
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      );
      response.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Range',
      );
      response.setHeader(
        'Access-Control-Expose-Headers',
        'Content-Range, X-Total-Count',
      );

      // Preflight CORS: responder antes de resolver rota
      if (request.method === 'OPTIONS') {
        response.status(204).send();
        return;
      }

      const route = this.findRoute(request);
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);

      // Content-Range para arrays (React-Admin)
      if (Array.isArray(result)) {
        const total = result.length;
        response.setHeader('Content-Range', `items 0-${total - 1}/${total}`);
        response.setHeader('X-Total-Count', total.toString());
      }

      this.send(response, result);
    } catch (err) {
      this.reject(context, err);
    }
  }
}
