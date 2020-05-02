import { useState } from "react";

function useCollection() {
    const [ coll, setColl ] = useState([]);

    /**
     * add the users data to the list
     * @param {Event} e 
     */
    const handleAddCollectionItem = (item) => {
        setColl([...coll, item]);
    };

    return { coll, handleAddCollectionItem };
}

export default useCollection;