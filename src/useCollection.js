import { useState } from "react";

function useCollection() {
    const [ coll, setColl ] = useState([]);

    const handleAddCollectionItem = (item) => {
        setColl([...coll, item]);
    };

    return { coll, handleAddCollectionItem };
}

export default useCollection;