export const filterTopQuestionsAndCategories = (quiz) => {
    const topQuestions = quiz.filter((q) => q.top); // Топовые вопросы
    const uniqueCategories = [...new Set(topQuestions.map((q) => q.category))]; // Уникальные категории
    return { topQuestions, uniqueCategories };
  };
  