import { DataProvider, fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:3000/api';

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    
    // Primeiro, obter o total de registos
    const countUrl = `${apiUrl}/${resource}/count`;
    const countResponse = await fetchUtils.fetchJson(countUrl);
    const total = countResponse.json.count || 0;

    // Depois, obter os dados com paginação
    const filter = {
      offset: (page - 1) * perPage,
      limit: perPage,
      order: [`${field} ${order}`],
      where: params.filter,
    };

    const url = `${apiUrl}/${resource}?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const { json } = await fetchUtils.fetchJson(url);

    return {
      data: json,
      total: total,
    };
  },

  getOne: (resource, params) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  getMany: (resource, params) => {
    const filter = {
      where: { id: { inq: params.ids } },
    };
    const url = `${apiUrl}/${resource}?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    
    return fetchUtils.fetchJson(url).then(({ json }) => ({ 
      data: json 
    }));
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const whereClause = {
      ...params.filter,
      [params.target]: params.id,
    };
    
    // Obter total
    const countUrl = `${apiUrl}/${resource}/count?where=${encodeURIComponent(JSON.stringify(whereClause))}`;
    const countResponse = await fetchUtils.fetchJson(countUrl);
    const total = countResponse.json.count || 0;

    // Obter dados
    const filter = {
      offset: (page - 1) * perPage,
      limit: perPage,
      order: [`${field} ${order}`],
      where: whereClause,
    };

    const url = `${apiUrl}/${resource}?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const { json } = await fetchUtils.fetchJson(url);

    return {
      data: json,
      total: total,
    };
  },

  create: (resource, params) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id } as any,
    })),

  update: (resource, params) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    }).then(() => ({ 
      data: { ...params.data, id: params.id } as any,
    })),

  updateMany: (resource, params) => {
    return Promise.all(
      params.ids.map(id =>
        fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(params.data),
        })
      )
    ).then(() => ({ 
      data: params.ids 
    }));
  },

  delete: (resource, params) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(() => ({ 
      data: params.previousData as any,
    })),

  deleteMany: (resource, params) => {
    return Promise.all(
      params.ids.map(id =>
        fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`, {
          method: 'DELETE',
        })
      )
    ).then(() => ({ 
      data: params.ids 
    }));
  },
};
