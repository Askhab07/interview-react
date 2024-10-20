import SearchQuestions from '../components/SearchQuestions';
import Categories from '../layout/Categories';

const Home = () => {

    return (
        <div className='flex flex-col p-5 dark:bg-slate-800 dark:text-white'>
            <h2 className='text-xl font-bold mb-5'>Подготовка с собеседованию</h2>
            <SearchQuestions/>
            <Categories />
        </div>
    );
};

export default Home;