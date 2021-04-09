// write your custom hook here to control your checkout form
import useLocalStorage from './useLocalStorage';

const useForm = (initialValue) => {
    
    const [values, setValues] = useLocalStorage("form", initialValue);;
  
    const handleChanges = (e) => {
        // const errorMessage = errorHandling(e.target.name, e.target.value);

        // if (errorMessage !== "") {
        //     setDisplayData(false);
        //   }

        setValues({ ...values, [e.target.name]: e.target.value });
    };

    //tried adding clearForm because i didn't like how 
    //post-submit the information remained on the page
    const clearForm = e => {
        e.preventDefault();
        setValues(initialValue);
      };
    
    return([ values, handleChanges, clearForm ]);
}

export default useForm;