import { Cascader } from "antd";

const Cascade = () => {
  const options = [
    {
      label: "Light",
      value: "light",
      children: new Array(20)
        .fill(null)
        .map((_, index) => ({ label: `Number ${index}`, value: index })),
    },
    {
      label: "Bamboo",
      value: "bamboo",
      children: [
        {
          label: "Little",
          value: "little",
          children: [
            {
              label: "Toy Fish",
              value: "fish",
            },
            {
              label: "Toy Cards",
              value: "cards",
            },
            {
              label: "Toy Bird",
              value: "bird",
            },
          ],
        },
      ],
    },
  ];

  function onChange(value: any) {
    console.log(value);
  }

  return (
    <Cascader
      style={{ width: 233 }}
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
    />
  );
};

export default Cascade;
