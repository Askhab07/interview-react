import SearchQuestions from '../components/SearchQuestions';
import Categories from '../layout/Categories';
import Button from '../components/Button';

const Home = () => {

    return (
        <div className='flex flex-col p-5 dark:bg-slate-800 dark:text-white'>
            <h2 className='text-xl font-bold mb-5'>Подготовка с собеседованию</h2>
            <SearchQuestions/>
            <Categories />
            <Button className="fixed translate-x-3 bottom-4 w-5/6 h-12 mt-5 mb-20 font-semibold text-xl rounded-xl text-blue-500 bg-blue-50 border-[1px] border-blue-500 dark:text-white dark:bg-slate-800" />
        </div>
    );
};

export default Home;