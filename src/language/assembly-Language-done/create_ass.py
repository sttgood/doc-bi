import os

# 定义目录结构
directory_structure = {
    "1. 基础入门": [
        {
            "8086 微处理器概述": [
                "8086 微处理器的发展背景与历史意义.md",
                "8086 在计算机发展历程中的地位.md",
                "8086 与其他微处理器的比较.md"
            ]
        },
        {
            "硬件架构基础": [
                {
                    "8086 内部寄存器结构": [
                        "通用寄存器（AX、BX、CX、DX）及各自用途.md",
                        "指针寄存器（SP、BP）和变址寄存器（SI、DI）的作用.md",
                        "段寄存器（CS、DS、SS、ES）的功能与段地址机制.md",
                        "指令指针寄存器（IP）和标志寄存器（FLAGS）的意义.md"
                    ]
                },
                {
                    "8086 存储器组织": [
                        "分段管理模式（代码段、数据段、堆栈段、附加段）.md",
                        "物理地址的形成（段地址与偏移地址组合）.md",
                        "内存寻址空间与分段大小.md"
                    ]
                },
                "8086 引脚功能（可选深入学习）.md"
            ]
        },
        {
            "开发环境搭建": [
                "选择合适的汇编工具（如 MASM）.md",
                "配置汇编、链接和调试环境.md",
                "了解常用的调试工具（如 Debug 程序）.md"
            ]
        }
    ],
    "2. 汇编语言基本语法": [
        {
            "语句格式与类型": [
                "指令语句的组成（操作码、操作数）.md",
                "伪指令语句的作用与常见类型（数据定义、段定义等）.md",
                "注释的使用规范.md"
            ]
        },
        {
            "数据表示与存储": [
                "数值数据的表示（二进制、十进制、十六进制）.md",
                "字符数据的表示（ASCII 码）.md",
                "数据在内存中的存储方式（字节序）.md"
            ]
        },
        {
            "寻址方式": [
                "立即寻址.md",
                "寄存器寻址.md",
                "直接寻址.md",
                "寄存器间接寻址.md",
                "寄存器相对寻址.md",
                "基址变址寻址.md",
                "相对基址变址寻址.md"
            ]
        }
    ],
    "3. 基本指令集": [
        {
            "数据传送指令": [
                "MOV 指令（寄存器 - 寄存器、寄存器 - 内存、内存 - 寄存器等情况）.md",
                "PUSH 和 POP 指令（堆栈操作）.md",
                "XCHG 指令（数据交换）.md",
                "LEA 指令（有效地址传送）.md",
                "XLAT 指令（换码指令）.md"
            ]
        },
        {
            "算术运算指令": [
                "加法指令（ADD、ADC）.md",
                "减法指令（SUB、SBB）.md",
                "乘法指令（MUL、IMUL）.md",
                "除法指令（DIV、IDIV）.md",
                "十进制调整指令（DAA、DAS、AAA、AAS、AAM、AAD）.md"
            ]
        },
        {
            "逻辑运算指令": [
                "AND、OR、NOT、XOR 指令.md",
                "TEST 指令.md",
                "移位指令（SHL、SHR、SAL、SAR）.md",
                "循环移位指令（ROL、ROR、RCL、RCR）.md"
            ]
        },
        {
            "控制转移指令": [
                "无条件转移指令（JMP）.md",
                "条件转移指令（基于标志位判断，如 JE、JNE、JG 等）.md",
                "循环控制指令（LOOP、LOOPZ、LOOPNZ）.md",
                "子程序调用与返回指令（CALL、RET）.md",
                "中断指令（INT、IRET）.md"
            ]
        }
    ],
    "4. 汇编程序结构": [
        {
            "程序分段结构": [
                "代码段的定义与编写规范.md",
                "数据段的初始化与数据存储.md",
                "堆栈段的设置与使用.md",
                "附加段的应用场景.md"
            ]
        },
        {
            "模块化程序设计": [
                "子程序的设计与调用.md",
                "参数传递方法（寄存器传递、内存传递、堆栈传递）.md",
                "模块化编程的优点与实现策略.md"
            ]
        }
    ],
    "5. 输入输出与中断": [
        {
            "输入输出接口基础": [
                "I-O 端口的概念与编址方式.md",
                "8086 与外部设备的数据交换方式（查询、中断、DMA）.md"
            ]
        },
        {
            "中断系统": [
                "中断的概念与分类（内部中断、外部中断）.md",
                "中断向量表的结构与作用.md",
                "中断服务程序的编写与调用.md",
                "8259A 可编程中断控制器的使用（可选深入学习）.md"
            ]
        },
        {
            "基本输入输出功能调用": [
                "DOS 功能调用（如键盘输入、屏幕输出等）.md",
                "BIOS 功能调用（更底层的硬件操作）.md"
            ]
        }
    ],
    "6. 高级应用与编程技巧": [
        {
            "字符串处理": [
                "字符串操作指令（MOVS、CMPS、SCAS、LODS、STOS）.md",
                "字符串处理程序的编写（如字符串比较、查找、复制等）.md"
            ]
        },
        {
            "宏汇编": [
                "宏的定义、调用与展开.md",
                "宏与子程序的区别与应用场景.md",
                "带参数宏的使用.md"
            ]
        },
        {
            "多模块编程": [
                "不同模块之间的连接与通信.md",
                "外部符号的声明与使用.md"
            ]
        },
        {
            "汇编语言与高级语言的混合编程": [
                "在高级语言（如 C、C++）中调用汇编子程序.md",
                "在汇编程序中调用高级语言函数.md"
            ]
        }
    ],
    "7. 调试与优化": [
        {
            "程序调试方法": [
                "使用调试工具（如 Debug）进行单步执行、断点设置等操作.md",
                "查看寄存器和内存内容以排查错误.md"
            ]
        },
        {
            "程序优化策略": [
                "指令级优化（选择更高效的指令序列）.md",
                "算法级优化（改进程序逻辑）.md",
                "内存使用优化（合理分配内存）.md"
            ]
        }
    ]
}

def create_directory_structure(base_path, structure, parent_order=1):
    current_order = parent_order
    for category, items in structure.items():
        category_path = os.path.join(base_path, category)
        os.makedirs(category_path, exist_ok=True)
        
        # 创建 README.md 文件并写入 YAML front matter
        readme_content = f"""---
title: {category}
article: false
index: false
dir:
  order: {current_order}
  collapsible: false
---
"""
        readme_file_path = os.path.join(category_path, "README.md")
        with open(readme_file_path, 'w', encoding='utf-8') as f:
            f.write(readme_content)
        
        sub_item_order = 1
        for item in items:
            if isinstance(item, dict):
                # 如果子项是字典，则递归调用
                sub_category_name = list(item.keys())[0]
                sub_category_items = item[sub_category_name]
                create_directory_structure(category_path, {sub_category_name: sub_category_items}, sub_item_order)
                sub_item_order += 1
            elif isinstance(item, str):
                file_path = os.path.join(category_path, item)
                md_content = f"""---
title: {os.path.splitext(item)[0]}
article: false
order: {sub_item_order}
---
# {os.path.splitext(item)[0]}\n\n"""
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(md_content)
                sub_item_order += 1
        
        current_order += 1

if __name__ == "__main__":
    base_path = "./8086_assembly_knowledge"
    create_directory_structure(base_path, directory_structure)
    print(f"Directory structure created at {base_path}")