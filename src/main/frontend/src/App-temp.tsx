// import { Button, Input, SelectInput, Breadcrumbs } from "./components";
// import { CheckIcon } from "./assets/check-icon";
// import { StarIcon } from "./assets/star-icon";
// import { HomeIcon } from "./assets/home-icon";
// import { GearIcon } from "./assets/gear-icon";
// import { UsersIcon } from "./assets/users-icon";

// const selectValue = [
//   {
//     label: "Orange",
//     value: "orange",
//   },
//   {
//     label: "Red",
//     value: "red",
//   },
//   {
//     label: "Blue",
//     value: "blue",
//   },
//   {
//     label: "Green",
//     value: "green",
//   },
//   {
//     label: "Purple",
//     value: "purple",
//   },
// ];
// const selectValueWithIcon = [
//   {
//     label: "Orange",
//     startAdornment: <StarIcon className="size-5" style={{ color: "orange" }} />,
//     value: "orange",
//   },
//   {
//     label: "Red",
//     startAdornment: <StarIcon className="size-5" style={{ color: "red" }} />,
//     value: "red",
//   },
//   {
//     label: "Blue",
//     startAdornment: <StarIcon className="size-5" style={{ color: "blue" }} />,
//     value: "blue",
//   },
//   {
//     label: "Green",
//     startAdornment: <StarIcon className="size-5" style={{ color: "green" }} />,
//     value: "green",
//   },
//   {
//     label: "Purple",
//     startAdornment: <StarIcon className="size-5" style={{ color: "purple" }} />,
//     value: "purple",
//   },
// ];

// const breadcrumbItems = [
//   {
//     href: "/",
//     icon: "Dashboard",
//   },
//   {
//     href: "/settings",
//     label: "Settings",
//   },
//   {
//     href: "/settings/users",
//     label: "Users",
//   },
// ];

// const manyBreadcrumbItems = [
//   {
//     href: "/",
//     icon: "Dashboard",
//   },
//   {
//     href: "/settings",
//     label: "Settings",
//   },
//   {
//     href: "/settings/users",
//     label: "Users",
//   },
//   {
//     href: "/settings",
//     label: "Eqpuipment",
//   },
//   {
//     href: "/settings/users",
//     label: "Resources",
//   },
//   {
//     href: "/settings/users",
//     label: "Materials",
//   },
// ];

// const BreadcrumbWithIcon = [
//   {
//     href: "/",
//     icon: <HomeIcon className="size-4" />,
//   },
//   {
//     href: "/settings",
//     icon: <GearIcon className="size-4" />,
//   },
//   {
//     href: "/settings/users",
//     icon: <UsersIcon className="size-4" />,
//     label: "Users",
//   },
// ];

// const BreadcrumbWithIconText = [
//   {
//     href: "/",
//     icon: <HomeIcon className="size-4" />,
//     label: "Dashboard",
//   },
//   {
//     href: "/settings",
//     icon: <GearIcon className="size-4" />,
//     label: "Settings",
//   },
//   {
//     href: "/settings/users",
//     icon: <UsersIcon className="size-4" />,
//     label: "Users",
//   },
// ];

// function App() {
//   return (
//     <>
//       <div>
//         <h1 className="text-3xl">Button</h1>
//         <div className="flex gap-8 p-16">
//           <Button
//             children="Primary"
//             size="medium"
//             variant="primary"
//             startAdornment={<CheckIcon aria-label="Check" />}
//           />
//           <Button children="secondary" size="medium" variant="secondary" />
//           <Button children="outlined" size="medium" variant="outlined" />
//           <Button children="text" size="medium" variant="text" />
//           <Button
//             children="text-default"
//             size="medium"
//             variant="text-default"
//           />
//           <Button
//             children="Primary-disabled"
//             size="medium"
//             variant="primary"
//             disabled={true}
//           />
//           <Button
//             children="outlined-disabled"
//             size="medium"
//             variant="outlined"
//             disabled={true}
//           />
//         </div>
//         <h1 className="text-3xl">Input</h1>
//         <div className="flex gap-8 p-16">
//           <Input
//             helperText="Helper Text"
//             label="Default"
//             placeholder="Text Field"
//             size="medium"
//           />
//           <Input
//             helperText="Helper Text"
//             label="Size Large"
//             placeholder="Text Field"
//             size="large"
//           />
//           <Input
//             helperText="Helper Text"
//             label="Error"
//             placeholder="Error Field"
//             size="medium"
//             error={true}
//           />
//           <Input
//             helperText="Helper Text"
//             label="Width Custom"
//             placeholder="Text Field"
//             size="medium"
//             containerClassName="w-[400px]"
//           />
//           <Input
//             helperText="시작 부분 Icon 추가"
//             label="Start Icon"
//             placeholder="Text Field"
//             size="medium"
//             startAdornment={<CheckIcon />}
//             containerClassName="w-[300px]"
//           />
//           <Input
//             helperText="끝 부분 Icon 추가"
//             label="End Icon"
//             placeholder="Text Field"
//             size="medium"
//             endAdornment={<CheckIcon />}
//             containerClassName="w-[300px]"
//           />
//           <Input
//             helperText="양쪽 Icon 추가"
//             label="Between Icon"
//             placeholder="Text Field"
//             size="medium"
//             startAdornment={<CheckIcon />}
//             endAdornment={<CheckIcon />}
//             containerClassName="w-[300px]"
//           />
//           <Input
//             helperText="Input 비활성화"
//             label="Disabled"
//             placeholder="Disabled Field"
//             size="medium"
//             disabled={true}
//           />
//         </div>
//         <h1 className="text-3xl">SelectInput</h1>
//         <div className="flex gap-8 p-16">
//           <SelectInput
//             label="Label"
//             options={selectValue}
//             placeholder="Choose an option"
//             size="medium"
//           />
//           <SelectInput
//             label="Value Selected"
//             options={selectValue}
//             placeholder="Choose an option"
//             size="medium"
//             value="purple"
//           />
//           <SelectInput
//             label="Select Options With Icon"
//             options={selectValueWithIcon}
//             placeholder="Choose an option"
//             size="medium"
//           />
//           <SelectInput
//             label="Multiple Select"
//             multiple
//             options={selectValue}
//             placeholder="Choose an option"
//             size="medium"
//           />
//         </div>
//         <h1 className="text-3xl">Breadcrumbs</h1>
//         <div className="flex gap-16 p-16">
//           <Breadcrumbs
//             items={breadcrumbItems}
//             maxItems={6}
//             separator="chevron"
//           />
//           <Breadcrumbs items={breadcrumbItems} maxItems={6} separator="slash" />
//           <Breadcrumbs
//             items={manyBreadcrumbItems}
//             maxItems={2}
//             separator="slash"
//           />
//           <Breadcrumbs
//             items={BreadcrumbWithIcon}
//             maxItems={6}
//             separator="chevron"
//           />
//           <Breadcrumbs
//             items={BreadcrumbWithIconText}
//             maxItems={6}
//             separator="chevron"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
