import Categories from '../layout/Categories';

const Home = () => {

    return (
        <div className='flex flex-col m-5 h-screen'>
            <h2 className='text-xl font-bold mb-5'>Подготовка с собеседованию</h2>
            <Categories />
        </div>
    );
};

export default Home;