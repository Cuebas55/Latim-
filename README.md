# Latina — Aprenda Latim

## 🎯 Objetivo
Criar uma plataforma estática de estudo de latim com quiz configurável, guia de estudo, flashcards e modo professor para adicionar questões personalizadas.

## ✅ Funcionalidades implementadas
- Quiz configurável por **nível**, **tópicos** e **quantidade**
- Banco local com **40+ questões** e explicações pedagógicas
- Revisão de resultados com feedback completo
- **Modo Estudo** com declinações, verbo *sum*, pronúncia e provérbios
- **Flashcards** com filtro por tópico e embaralhamento
- **Modo Professor** com CRUD local (localStorage)

## 🔗 URIs / Entradas funcionais
- `index.html` — Página principal
- Seções internas (SPA simples):
  - `#quiz`
  - `#study`
  - `#flashcards`
  - `#teacher`

## 🚫 Funcionalidades não implementadas
- Autenticação de usuários
- Sincronização em nuvem
- Exportação de relatórios

## ✅ Próximos passos recomendados
- Criar níveis adicionais e trilhas guiadas
- Adicionar áudio de pronúncia
- Importar/exportar banco de questões (JSON)

## 🧱 Modelos de dados e armazenamento
- **Questões base:** array local em `js/main.js`
- **Questões personalizadas:** armazenadas em `localStorage` (`latin_trivia_custom`)

### Estrutura de uma questão
```json
{
  "question": "Como se diz 'amor' em latim?",
  "options": ["amor", "timor", "honor", "labor"],
  "correctAnswer": 0,
  "topic": "Vocabulário essencial",
  "level": "beginner",
  "explanation": "Explicação curta."
}
```

## 🌐 URLs públicas
- Produção: (definida no Publish)
- APIs externas: nenhuma

## 📌 Observações
- Projeto 100% estático (HTML, CSS, JS).
- Não requer backend ou APIs autenticadas.
