import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBookmarksData } from "../../store/bookmarksSlice";

export const Bookmarks = () => {

    const bookmarks = useSelector(state => state.bookmarks.bookmarks);
    const dispatch = useDispatch();


    useEffect(() => {
        bookmarks.map((city, index) => {
            dispatch(fetchBookmarksData(city.city, index))
        })
    }, [])


    return(
        <div>

        </div>
    )
}