import { useEffect } from 'react';

const useDocumentTitle = (title, name) => {

    useEffect(() => {
        document.title = title;

        return () => {
            console.log(`Clean up`);
        }
    });
}
 
export default useDocumentTitle;


