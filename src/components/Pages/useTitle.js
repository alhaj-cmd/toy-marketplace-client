import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() =>{
    document.title =`Educational and Learning Toys || ${title}`;
   }, [title])
};

export default useTitle;