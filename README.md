# 🧬 Diag-Helper — Sistema de Apoio ao Diagnóstico Frontend em React

O **Diag-Helper** é um projeto educacional pensado para estudantes de **Frontend** do projeto **Bolsa do Futuro da Aponti Academy** aprenderem, na prática, como funciona a estrutura de um sistema médico auditável, com fluxo de login, carregamento de imagens histopatológicas, análise assistida por IA e geração de laudos.

A proposta é simular, com simplicidade e rigor, o cotidiano de um patologista que utiliza ferramentas digitais para apoiar suas decisões clínicas, respeitando princípios de rastreabilidade, controle e padronização.

---

## 🎯 Objetivos do Sistema

O frontend do **Diag-Helper** foi projetado para demonstrar:

- **Autenticação de profissionais de saúde** (login com dados pessoais e registro profissional).
- **Carregamento automático das configurações institucionais** após o login (logo, cabeçalho, endereço).
- **Navegação e visualização de imagens histopatológicas** pré-carregadas.
- **Envio de uma imagem para uma API de análise automática** e exibição do resultado retornado (saudável, benigno, maligno).
- **Geração de um laudo estruturado**, já preenchido com:
  - Dados do médico, dados institucionais, data e horário da análise, dados do paciente, resultado fornecido pela IA.
  - Exportação do laudo para PDF.
- **Registro completo das ações em um arquivo de log auditável**, individual por usuário.

---

## 📜 Requisitos de Auditoria (SAMD)

O **Diag-Helper** simula as demandas de sistemas médicos reais. Por isso, incorpora:

- **Registro obrigatório de todas as ações do usuário.**
- Cada **usuário médico** possui um arquivo de log próprio.
- As entradas de log devem conter:
  - **Data e hora**, descrição da ação, parâmetros envolvidos (ex.: ID da imagem, dados inseridos, resultado da análise).

### Ações que devem gerar log automaticamente:
- Login.
- Abertura de qualquer imagem para análise.
- Preenchimento dos dados do paciente.
- Envio da imagem para o backend/IA.
- Recebimento do resultado da IA.
- Geração, aceitação ou rejeição do laudo.

---

## 🧑‍⚕️ Dados Necessários no Sistema

### Cadastro de usuários (Admin)

**Obrigatórios**:
- Nome completo
- CPF
- Registro profissional (CRM / CRBM / CRO etc.)
- E-mail
- Telefone
- Endereço

**Níveis**:
- **Administrador**: gerencia usuários, pode remover e consultar relatórios.
- **Médico**: realiza análises e gera laudos.

### Cadastro mínimo do paciente

O médico insere:
- Nome fictício (por questões éticas)
- CPF (ou ID interno)
- Idade

---

## 🖼️ Imagens e Análises

As **imagens histopatológicas** já ficam disponíveis no sistema. O médico seleciona uma imagem e envia para o backend:

- A IA retorna uma classificação (ex.: "Lesão sugestiva de malignidade").
- O frontend monta o laudo e permite exportar.

---

## 📄 Estrutura do Laudo

O laudo contém:

- **Cabeçalho institucional** (logo, nome da instituição, CNPJ, endereço).
- **Data e horário da análise**.
- **Identificação do paciente**.
- **Imagem analisada** (opcional).
- **Resultado da análise automática**.
- **Observações clínicas** (campo editável).
- **Identificação do médico responsável**:
  - Nome
  - Registro profissional
  - Local
  - Data
  - Assinatura digital simulada

O usuário pode **aceitar ou rejeitar o laudo**.

---

## 🔐 Login e Autenticação

- **Login com CPF ou e-mail**.
- Senha padrão, **sem 2FA** (para fins didáticos).
- **Validação de tipo de usuário** (admin / médico).
- Em caso de erro, **mensagens amigáveis e claras**.

---

## 🎨 Layout e Identidade Visual

- **Paleta institucional**: branco + verde (biomedicina / computação biomédica).
- **Fontes simples e legíveis** (Inter, Roboto, Open Sans).
- **Permitido usar**:
  - Brasão da universidade
  - Marca do grupo/laboratório
- Layout limpo, objetivo e padronizado.

---

## 🚀 Como rodar o projeto

1. **Instale as dependências**:

```bash
npm install
