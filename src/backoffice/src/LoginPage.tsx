import * as React from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Box, Button, TextField, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import BuildIcon from '@mui/icons-material/Build';
import CarRepairIcon from '@mui/icons-material/CarRepair';

function Clock() {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <Typography
      sx={{
        position: 'fixed',
        top: 24,
        right: 32,
        fontSize: '56px',
        letterSpacing: '6px',
        color: '#3d6580',
        fontWeight: 300,
        fontFamily: 'monospace',
      }}
    >
      {String(now.getHours()).padStart(2, '0')}:
      {String(now.getMinutes()).padStart(2, '0')}:
      {String(now.getSeconds()).padStart(2, '0')}
    </Typography>
  );
}

export const LoginPage = () => {
  const login = useLogin();
  const notify = useNotify();
  const [username, setUsername] = React.useState('');
  const [pin, setPin] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({ username, password: pin });
    } catch {
      notify('Utilizador/PIN inválido', { type: 'error' });
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: 'linear-gradient(135deg, #b8daf2 0%, #7ec4e9 50%, #5fb5de 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
      }}
    >
      {/* Círculos decorativos */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          bgcolor: 'rgba(255, 255, 255, 0.15)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '25%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
        }}
      />

      <Clock />

      {/* Sidebar com formulário */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 310,
          bgcolor: 'rgba(140, 150, 160, 0.4)',
          backdropFilter: 'blur(5px)',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo */}
<Box sx={{ textAlign: 'center', mb: 3 }}>
  <Box
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 2,
      p: 2,
      mb: 1,
      display: 'inline-block',
    }}
  >
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BuildIcon sx={{ fontSize: 32, color: '#2c5a7a' }} />
      <Typography sx={{ fontSize: 32, fontWeight: 700, color: '#2c5a7a' }}>
        GMA
      </Typography>
      <BuildIcon sx={{ fontSize: 32, color: '#2c5a7a', transform: 'scaleX(-1)' }} />
    </Box>
  </Box>
  <Typography sx={{ fontSize: 11, color: '#2c5a7a', mb: 0.5 }}>
    Gestão de Manutenção Automóvel
  </Typography>
</Box>

        <Box sx={{ flex: 1 }} />

        {/* Formulário */}
        <Box component="form" onSubmit={submit}>
          <Typography sx={{ fontSize: 11, color: '#333', mb: 1 }}>
            Utilizador
          </Typography>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            size="small"
            sx={{ mb: 2, bgcolor: 'white' }}
          />

          <Typography sx={{ fontSize: 11, color: '#333', mb: 1 }}>
            Número Pin
          </Typography>
          <TextField
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            type="password"
            fullWidth
            size="small"
            sx={{ mb: 2, bgcolor: 'white' }}
          />

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              type="submit"
              variant="outlined"
              disabled={loading}
              fullWidth
              sx={{
                borderColor: 'rgba(255,255,255,0.6)',
                color: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Entrar
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => { setUsername(''); setPin(''); }}
              fullWidth
              sx={{
                borderColor: 'rgba(255,255,255,0.6)',
                color: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};