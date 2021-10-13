import React, { useState } from "react";
import { Select } from "antd";

const MultiSelect = () => {
  const { Option } = Select;
  const [items, setItems] = useState(["hyd", "mumbai", "pune"]);

  // const children = [];
  // for (let i = 10; i < 36; i++) {
  //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  // }

  function handleChange(values: any) {
    console.log(values);

    let finalItems: any = [];
    values.forEach((value: string) => {
      finalItems = [...finalItems, { tagName: value }];
    });

    console.log("finalItems>>>>>", finalItems);

    let vals;

    values.forEach((value: any) => {
      //   // if (item.tagName !== value) {
      //   //   vals = [...vals, value];
      //   // }
      //   // break
      //   for (let i = 0; i < items.length; i++) {
      //     if (items[i].tagName !== value) vals = [...vals, value];
      //     break;
      //   }
      if (!items.includes(value)) {
        vals = value;
      }
    });

    console.log("mappedOnes>>>", vals);
  }

  return (
    <div>
      <Select
        mode="tags"
        allowClear
        style={{ width: "50%" }}
        placeholder="TAGS / TOPICS"
        // defaultValue={["a10", "c12"]}
        onChange={handleChange}
      >
        {items.map((item, i) => (
          <Option key={i} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default MultiSelect;
