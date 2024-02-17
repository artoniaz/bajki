import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import taleActions from "../../features/tales/getTales/talesActions";

const MyTales = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(taleActions.getTalesByUser())
    },[])
    return ( <div>my tales</div> );
}
 
export default MyTales;