import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import '../../styles/Test.css';
import axios from 'axios';
import stringSimilarity from 'string-similarity'; // Импортируем библиотеку

const Tests = ({ setPages }) => {
  const [quizData, setQuizData] = useState(() => {
    const savedData = localStorage.getItem('quizData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0); // Счётчик правильных ответов
  const [result, setResult] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (quizData.length === 0) {
      axios.get('https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec')
        .then(response => {
          setQuizData(response.data);
          localStorage.setItem('quizData', JSON.stringify(response.data));
        })
        .catch(error => {
          console.error('Error fetching quiz data:', error);
        });
    }
  }, [quizData]);

  useEffect(() => {
    setButtonDisabled(currentAnswer.trim() === ''); // Блокировка кнопки при пустом ответе
  }, [currentAnswer]);

  // Очистка строк от символов
  const cleanString = (str) => {
    return str.replace(/[.,:;=()\-\s]/g, '').toLowerCase();
  };

  const getRandomQuestions = (questionsArray) => {
    const shuffled = questionsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10); // Ограничиваем до 10 вопросов
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    const filteredQuestions = quizData.filter(q => q.category === event.target.value);
    const randomQuestions = getRandomQuestions(filteredQuestions);
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setQuestionCount(0);
    setCurrentAnswer('');
    setScore(0); // Сброс счёта
    setResult('');
  };

  const handleAnswerChange = (event) => {
    setCurrentAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion && currentQuestion.answer) {
      // Очистка пользовательского ответа и ответа из базы данных
      const cleanedUserAnswer = cleanString(currentAnswer);
      const cleanedCorrectAnswer = cleanString(currentQuestion.answer);

      const similarity = stringSimilarity.compareTwoStrings(cleanedUserAnswer, cleanedCorrectAnswer);

      // Устанавливаем порог схожести в 80%
      if (similarity > 0.8) {
        setScore(score + 1); // Увеличиваем счёт, если ответ правильный
        setResult(`Правильно! Ответ из базы: ${currentQuestion.answer}`);
      } else {
        setResult(`Неправильно! Правильный ответ: ${currentQuestion.answer}`);
      }
    } else {
      setResult('Ошибка: нет правильного ответа для текущего вопроса.');
    }

    // Переход к следующему вопросу
    if (questionCount < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionCount(questionCount + 1);
    } else {
      alert(`Тест завершен! Вы ответили правильно на ${score + 1} из 10 вопросов.`);
      setCurrentQuestionIndex(0);
      setQuestionCount(0);
      setQuestions([]); // Сброс вопросов
      setSelectedCategory(''); // Сброс категории
      setResult('');
    }

    setCurrentAnswer(''); // Очищаем поле ответа
  };

  const handleClick = () => {
    setPages(1); // Возврат на предыдущую страницу
  };

  return (
    <div className='tests'>
      <div className="test-forms">
        <div className="choose">
          Выберите категорию
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Выберите категорию</option>
            {[...new Set(quizData.map(q => q.category))].map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        {questions.length > 0 && (
          <>
            <div className="test-quest">{questions[currentQuestionIndex]?.question}</div>
            <textarea value={currentAnswer} onChange={handleAnswerChange}></textarea>
            <div className="result">{result}</div>
          </>
        )}
      </div>
      <div className="tests-btn">
        <Button className='test-btn' text='Skip' onClick={handleNextQuestion} />
        <Button className='test-btn' text='Examination' onClick={handleNextQuestion} disabled={buttonDisabled} />
      </div>
      <Button onClick={handleClick} text='Back to go' />
    </div>
  );
};

export default Tests;
