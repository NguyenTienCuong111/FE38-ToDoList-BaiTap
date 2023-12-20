import { useEffect, useState } from "react";
import { Space } from "antd";
import { useLocation, useParams } from "react-router-dom";

function ToDoListDetailPage() {
  // Cách dùng useEffect lấy data từ localStorage

  // const params = useParams();
  // const [detail, setDetail] = useState([]);
  // useEffect(() => {
  //   const data = window.localStorage.getItem("taskList");
  //   setDetail(JSON.parse(data));
  // }, []);
  // const getData = () => {
  //   const dataOnly = detail?.filter((item) => {
  //     return item.id === params?.id;
  //   });
  //   return dataOnly;
  // };
  // const dataDetail = getData();

  //cách dùng { state } của  useLocation() trong thẻ Link
  let { state } = useLocation();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <div>
        <h3>To Do List Detail Nguyễn Tiến Cường</h3>
        <ul>
          <li>Title: {state.title}</li>
          <li>Content: {state.content}</li>
        </ul>
      </div>

      <div>
        {/* {dataDetail.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
              <li>{item.content}</li>
            </ul>
          );
        })} */}
      </div>
    </>
  );
}

export default ToDoListDetailPage;
