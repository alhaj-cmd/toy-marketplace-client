import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCategory from './ShopCategory';

const Tabex = () => {

  const [categories, setCategory] = useState([]);

  useEffect(() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])

  return (
    <div className='text-center mt-6 mb-6'>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           {
            categories.map(service => console.log(service))
           }
          </div> */}
      <Tabs>

        <div className='text-5xl mb-12  font-extrabold '>
          <Tab> Shop by <span className='text-primary'> category</span></Tab>
        </div>

        <TabList>
          <Tab><span className='text-3xl font-bold text-primary'>Math Toys</span>
          </Tab>
          <Tab><span className='text-3xl font-bold text-orange-500'>Language Toys</span></Tab>
          <Tab><span className='text-3xl font-bold text-primary'>Science Toys</span></Tab>
        </TabList>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           {
            categories.map(service => <ShopCategory key={service.id}
              service ={service}
            >
              
            </ShopCategory>)
           }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>Language one</div>
            <div>Language two</div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>Science one</div>
            <div>Science two</div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabex;