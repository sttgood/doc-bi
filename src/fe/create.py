import os

# 定义目录名称
directory_name = "mermaid_diagrams"

# 创建目录
if not os.path.exists(directory_name):
    os.makedirs(directory_name)

# 定义每个Markdown文件的名称和顺序
file_names_with_order = [
    ("流程图.md", 1),
    ("时序图.md", 2),
    ("类图.md", 3),
    ("状态图.md", 4),
    ("实体关系图.md", 5),
    ("用户旅程图.md", 6),
    ("甘特图.md", 7),
    ("饼图.md", 8),
    ("象限图.md", 9),
    ("需求图.md", 10),
    ("Gitgraph (Git) 图.md", 11),
    ("C4 图.md", 12),
    ("思维导图.md", 13),
    ("时间线图.md", 14),
    ("ZenUML.md", 15),
    ("桑基图.md", 16),
    ("XY 图.md", 17),
    ("框图.md", 18),
    ("数据包图.md", 19),
    ("看板图.md", 20),
    ("架构图.md", 21),
    ("其他示例.md", 22)
]

# 定义README.md的内容（仅包含YAML front matter）
readme_content = """---
title: Mermaid Diagrams Documentation
article: false
index: false
dir:
  order: 
  collapsible: false
---
"""

# 创建README.md文件并写入内容
readme_file_path = os.path.join(directory_name, "README.md")
with open(readme_file_path, "w", encoding="utf-8") as readme_file:
    readme_file.write(readme_content)

# 创建并写入每个Markdown文件（内容为空，包含YAML front matter）
for filename, order in file_names_with_order:
    file_path = os.path.join(directory_name, filename)
    title = filename.replace(".md", "")
    yaml_front_matter = f"""---
title: {title}
article: false
order: {order}
---
"""
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(yaml_front_matter)  # 插入YAML front matter

print(f"Markdown documents and README.md created in the directory '{directory_name}'.")



