import {useEffect, useState} from "react";
export function CollapseContent() {
    const [contents, setContents] = useState([]);
    useEffect(()=>{
        setContents([
            {content: "React Native runs on React, a popular open source library for building user interfaces with JavaScript. To make the most of React Native, it helps to understand React itself. This section can get you started or can serve as a refresher course."}
        ])
    })
    const showContent=()=>{
            if(contents != null && contents.length > 0){
                return(
                   contents.c
                )
            } return <p>Không có nội dung</p>;
    }
    return(
        <>
            <button type="button"onClick={showContent}>Xem giới thiệu</button>
            <div>
                {showContent}
            </div>
        </>
    )
}
export default CollapseContent;