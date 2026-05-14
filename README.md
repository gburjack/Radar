# Radar ⚡

Seu quartel-general mental e estratégico.

## Setup em 3 passos

### 1. GitHub Pages
1. Suba os 4 arquivos neste repositório
2. Vá em **Settings → Pages → Branch: main / (root) → Save**
3. Seu site estará em `https://SEU_USUARIO.github.io/radar/`

### 2. Supabase (banco de dados grátis)
1. Crie conta em [supabase.com](https://supabase.com)
2. Novo projeto → nome: `radar` → região: South America
3. Vá em **SQL Editor** e rode:

```sql
create table qg_data (
  key text primary key,
  value jsonb not null default '[]'::jsonb,
  updated_at timestamptz default now()
);

alter table qg_data enable row level security;

create policy "allow_all" on qg_data
  for all using (true) with check (true);
```

4. Vá em **Settings → API** e copie a **Project URL** e **anon public key**

### 3. Conectar
Abra o `index.html` e preencha no topo do script:

```javascript
const SB_URL = 'https://xxxx.supabase.co';
const SB_KEY = 'eyJhbGci...';
```

Suba o arquivo atualizado no GitHub. Pronto!

### Notificações no MacBook
1. Abra o site no Chrome ou Safari
2. Clique no banner → **Permitir**
3. Vá em **Saúde → Agendar notificações de hoje**

> Notificações funcionam enquanto o navegador estiver aberto.
