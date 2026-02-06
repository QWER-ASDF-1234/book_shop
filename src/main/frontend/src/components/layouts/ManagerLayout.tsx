import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import * as icons from "react-icons/ai";
import { disassemble } from "hangul-js";

interface Menuchildren {
  title: string;
  jamo: string[];
  icon: React.ReactNode;
}

interface MenuInfo {
  id: number;
  title: string;
  jamo: string[];
  isHidden: boolean;
  children: Menuchildren[];
}

const rootData = [
  {
    id: 1,
    title: "상품관리",
    jamo: disassemble("상품관리"),
    isHidden: false,
    children: [
      {
        title: "상품등록",
        jamo: disassemble("상품등록"),
        icon: <icons.AiFillAccountBook />,
      },
      {
        title: "상품재고관리",
        jamo: disassemble("상품재고관리"),
        icon: <icons.AiFillAlert />,
      },
      {
        title: "상품정보수정",
        jamo: disassemble("상품정보수정"),
        icon: <icons.AiFillAlipayCircle />,
      },
    ],
  },
  {
    id: 2,
    title: "구매관리",
    jamo: disassemble("구매관리"),
    isHidden: false,
    children: [
      {
        title: "구매내역조회",
        jamo: disassemble("구매내역조회"),
        icon: <icons.AiFillAliwangwang />,
      },
      {
        title: "월별매출관리",
        jamo: disassemble("월별매출관리"),
        icon: <icons.AiFillAmazonCircle />,
      },
      {
        title: "주간매출관리",
        jamo: disassemble("주간매출관리"),
        icon: <icons.AiFillApi />,
      },
    ],
  },
  {
    id: 3,
    title: "회원관리",
    jamo: disassemble("회원관리"),
    isHidden: false,
    children: [
      {
        title: "회원정보조회",
        jamo: disassemble("회원정보조회"),
        icon: <icons.AiFillApple />,
      },
      {
        title: "회원정보변경",
        jamo: disassemble("회원정보변경"),
        icon: <icons.AiFillBackward />,
      },
    ],
  },
];
// 관리자(Manager)용 UI. 상단 header, body, sidebar 존재.
const ManagerLayout = () => {
  const [isHidden, setIsHidden] = useState<MenuInfo[]>(rootData);
  const [searchData, setSearchData] = useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
    if (event.target.value === "") {
      console.log(rootData);
      setIsHidden(rootData);
    } else {
      const targetJamo = disassemble(event.target.value);
      setIsHidden((prev) => {
        return rootData.reduce((result: MenuInfo[], value: MenuInfo) => {
          const children: Menuchildren[] = value.children.filter((x) =>
            value.jamo.some((item) => targetJamo.includes(item))
          );
          const obj = {
            ...value,
            children: children,
          };
          result.push(obj);
          return result;
        }, []);
      });
    }
  };

  return (
    <div className="m-auto w-[1600px] border border-solid border-zinc-500">
      <div className="flex h-[calc(100vh-120px)]">
        <div className="w-[15%] border border-solid border-zinc-500 p-3">
          <Input
            type="text"
            className="mb-3"
            placeholder="검색할 문자를 입력해주세요."
            value={searchData}
            onChange={onChangeHandler}
          />
          <div className="flex flex-col gap-5">
            {isHidden.map((x) => {
              if (x.children.length !== 0)
                return (
                  <ul key={x.title}>
                    <div className="flex items-center">
                      <span className="text-lg font-bold">{x.title} </span>
                      <span
                        onClick={() => {
                          setIsHidden((prev) => {
                            return prev.reduce(
                              (result: MenuInfo[], value: MenuInfo) => {
                                if (value.id === x.id) {
                                  value.isHidden = !value.isHidden;
                                }
                                result.push(value);
                                return result;
                              },
                              []
                            );
                          });
                        }}
                      >
                        {x.isHidden ? (
                          <icons.AiFillCaretUp />
                        ) : (
                          <icons.AiFillCaretDown />
                        )}
                      </span>
                    </div>
                    {!x.isHidden &&
                      x.children.map((child) => {
                        return (
                          <li key={child.title} className="ml-[16px]">
                            <div className="flex items-center">
                              {child.icon}
                              {child.title}
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                );
            })}
          </div>
        </div>
        <div className="w-[85%] border border-solid border-zinc-500">Body</div>
      </div>
    </div>
  );
};

export default ManagerLayout;
