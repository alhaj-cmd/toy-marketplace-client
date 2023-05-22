import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCategory from './ShopCategory';

const Tabex = () => {

  const [categories, setCategory] = useState([]);
  const [active, setActive] = useState("Science Toys");

  useEffect(() => {
    fetch(`http://localhost:5000/toycategory/${active}`)
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [active])

  // const result =categories?.filter(category => category.subCategory == active);
  // console.log(result);
  const handleTab = (tabClick) => {
    setActive(tabClick);
  }

  return (
    <div className='text-center mt-6 mb-6'>

      <Tabs>

        <div className='text-5xl mb-12  font-extrabold '>
          <Tab> Shop by <span className='text-primary'> category</span></Tab>
        </div>

        <TabList>
          {/* Math Category */}
          <Tab onClick={() => handleTab("Math Toys")}><span className={`${active == "Math Toys" ? " text-orange-500" : ""
            }`}>Math Toys</span>
          </Tab>
          {/* Language Toys */}
          <Tab onClick={() => handleTab("Language Toys")}><span className={`${active == "Language Toys" ? " text-orange-500" : ""
            }`}>Language Toys</span></Tab>
            {/* science toys */}
          <Tab onClick={() => handleTab("Science Toys")}><span className={`${active == "Science Toys" ? " text-orange-500" : ""
            }`}>Science Toys</span></Tab>
        </TabList>
      </Tabs>
      <div className='grid grid-cols-1 md:grid-cols-2 py-4 gap-4'>


        {
          categories.map(service => <ShopCategory key={service._id}
            service={service}
          >

          </ShopCategory>)
        }
      </div>
    </div>
  );
};

export default Tabex;