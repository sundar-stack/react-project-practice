import { Select, Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./Custom.css";
import axios from "axios";
const { Option } = Select;

let index = 100;

const CustomDropdown = () => {
  const [items, setItems] = useState<any>([]);
  const [name, setName] = useState("");
  const [dropDown, setDropDown] = useState<any>();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const fetchRes = await axios.get("https://dummyapi.io/data/v1/user", {
      headers: {
        "app-id": "6162ea92095cf46221aa0eca",
      },
    });
    console.log(fetchRes);
    let res: any = fetchRes.data;
    setItems(res.data);
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const addItem = async () => {
    console.log("addItem");
    if (name) {
      //   setItems([...items, { title: name }]);
      const createPost = await axios.post(
        "https://dummyapi.io/data/v1/user/create",
        {
          firstName: name,
          lastName: name,
          email: "dummy@email.com",
        },
        {
          headers: {
            "app-id": "6162ea92095cf46221aa0eca",
          },
        }
      );
      console.log("createPost>>>>", createPost);
      fetchItems();
    }
  };

  console.log("dropdown>>>>", dropDown);

  return (
    <div className="dropdown">
      <Select
        className="select"
        style={{ borderRadius: "20px" }}
        onChange={(value) => setDropDown(value)}
        defaultValue="disabled"
        dropdownRender={(menu) => {
          //   console.log("menu>>>", menu);

          return (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div className="input__wrapper">
                <Input
                  style={{ flex: "auto" }}
                  value={name}
                  onChange={onNameChange}
                />
                <div onClick={addItem} className="add">
                  <PlusOutlined /> <span>Add New Tag</span>
                </div>
              </div>
            </div>
          );
        }}
      >
        <Option disabled value="disabled">
          Tags / Topics
        </Option>
        {items.map((item: any, index: number) => (
          <Option key={index} value={item.firstName} selected>
            {item.firstName}
          </Option>
        ))}
      </Select>
    </div>
  );
};
export default CustomDropdown;
