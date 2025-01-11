---
title: 解析技术
icon: 
description: 
order: 2
article: false
---

[[toc]]

## **XML解析技术**

### DOM

- **DOM（Document Object Model）解析**

  - **原理**：DOM 解析器会把 XML 文档当作一个树形结构来处理。它将整个 XML 文档加载到内存中，构建一个 DOM 树，其中 XML 文档的每个元素、属性、文本内容等都被表示为树中的一个节点。例如，对于一个简单的 XML 文档，如描述图书信息的

  ```xml
  <bookstore>
      <book>
          <title>XML教程</title>
          <author>张三</author>
      </book>
  </bookstore>
  ```

  解析后会形成一个 DOM 树，`bookstore`是根节点，`book`是`bookstore`的子节点，`title`和`author`是`book`的子节点，而每个元素中的文本内容（如 “XML 教程” 和 “张三”）也会被表示为相应元素节点下的文本节点。

  - 操作方法：
    - **节点访问**：可以通过节点的关系来访问文档的各个部分。例如，在 JavaScript 中，可以使用`document.getElementsByTagName`方法获取具有特定标签名的元素节点集合。像`var books = document.getElementsByTagName("book");`就可以获取所有`book`元素节点。对于每个节点，还可以访问它的父节点、子节点和兄弟节点等。
    - **节点修改和操作**：能够方便地对 DOM 树进行修改。可以添加新节点、删除现有节点或者修改节点的属性和内容。例如，在 Java 中，可以使用`Document.createElement`方法创建新元素，然后使用`appendChild`方法将其添加到指定节点下。
  - 优点：
    - **随机访问方便**：可以在文档的任何位置进行访问，很容易实现跨节点的操作。例如，在一个包含多个产品信息的 XML 文档中，如果需要获取某个产品的特定属性，并同时更新其关联的其他属性，使用 DOM 解析可以方便地定位到这些节点进行操作。
    - **结构清晰利于复杂操作**：由于在内存中构建了完整的文档结构，对于复杂的文档处理，如文档的转换、重新组织等操作比较方便。比如，将一个 XML 格式的组织结构图转换为另一种格式时，利用 DOM 树可以清晰地处理元素之间的层次关系。
  - 缺点：
    - **内存占用大**：需要将整个 XML 文档加载到内存中构建 DOM 树，对于大型 XML 文档，可能会占用大量内存。例如，一个包含大量嵌套元素和数据的企业配置文件，使用 DOM 解析时会消耗较多内存资源。
    - **性能受影响**：构建 DOM 树的过程相对较慢，特别是对于结构复杂的大型文档。而且在内存有限的环境中，可能会因为内存不足而导致性能下降甚至程序崩溃。

### SAX

- **SAX（Simple API for XML）解析**

  - **原理**：SAX 解析是基于事件驱动的。当解析器读取 XML 文档时，在遇到不同的文档部分（如元素开始标签、元素结束标签、文本内容、文档开始、文档结束等）时会触发相应的事件。例如，当遇到`<book>`的开始标签时，会触发 “元素开始” 事件；当遇到`</book>`结束标签时，会触发 “元素结束” 事件。

  - 操作方法：

    - **事件处理器编写**：开发人员需要编写事件处理器（通常是实现特定接口的回调函数）来处理这些事件。在 Python 中，使用`xml.sax`模块时，需要定义一个继承自`ContentHandler`的类，并重写其中的方法，如`startElement`、`endElement`和`characters`等方法来处理元素开始、结束和文本内容事件。例如：

    ```python
    import xml.sax
    class BookHandler(xml.sax.ContentHandler):
        def __init__(self):
            self.current_tag = None
            self.title = None
            self.author = None
        def startElement(self, tag, attributes):
            self.current_tag = tag
            if tag == "book":
                print("开始解析一本书")
        def endElement(self, tag):
            if tag == "book":
                print("一本书解析完成，书名：", self.title, "，作者：", self.author)
            self.current_tag = None
        def characters(self, content):
            if self.current_tag == "title":
                self.title = content
            elif self.current_tag == "author":
                self.author = content
    parser = xml.sax.make_parser()
    handler = BookHandler()
    parser.setContentHandler(handler)
    parser.parse("books.xml")
    ```

  - 优点：

    - **内存效率高**：不需要在内存中存储整个文档，对于大型 XML 文档处理效率较高。因为它只是顺序读取文档并触发事件，不会像 DOM 解析那样构建复杂的内存结构。例如，在解析一个巨大的日志文件（以 XML 格式记录）时，SAX 可以高效地提取关键信息，而不会占用过多内存。
    - **解析速度快**：是一种顺序读取的方式，适合对文档进行一次扫描的简单数据提取场景。解析过程相对简单直接，没有复杂的树构建过程，所以速度比较快。

  - 缺点：

    - **随机访问困难**：不便于对文档进行随机访问和修改。由于 SAX 解析是一次性的事件驱动过程，一旦事件触发后没有保存相关数据，就很难再次获取该部分内容。例如，如果在解析过程中错过了某个元素的内容，很难再回溯获取。
    - **复杂结构处理复杂**：对于复杂的 XML 文档结构，事件处理逻辑可能会变得复杂。需要仔细设计事件处理器来正确处理各种嵌套元素和数据。例如，在处理具有多层嵌套和多种元素类型的 XML 文档时，需要维护多个状态变量来跟踪解析过程。

### StAX

- **StAX（Streaming API for XML）解析**

  - **原理**：StAX 是一种拉式（pull - based）解析 API。与 SAX 不同的是，它不是基于事件推送的，而是允许应用程序在需要的时候主动从 XML 流中拉取事件。例如，应用程序可以通过调用`nextEvent()`方法来获取下一个 XML 事件，如元素开始、元素结束、文本内容等。

  - 操作方法：

    - **事件拉取和处理**：在 Java 中，使用`javax.xml.stream`包进行 StAX 解析。首先通过`XMLInputFactory`创建`XMLEventReader`，然后使用`nextEvent()`方法拉取事件并进行处理。例如：

    ```java
    import javax.xml.stream.XMLEventReader;
    import javax.xml.stream.XMLInputFactory;
    import javax.xml.stream.XMLStreamException;
    import javax.xml.stream.events.XMLEvent;
    public class StAXParser {
        public static void main(String[] args) {
            try {
                XMLInputFactory factory = XMLInputFactory.newInstance();
                XMLEventReader eventReader = factory.createXMLEventReader("books.xml");
                boolean title = false;
                boolean author = false;
                while (eventReader.hasNext()) {
                    XMLEvent event = eventReader.nextEvent();
                    if (event.isStartElement()) {
                        if (event.asStartElement().getName().getLocalPart().equalsIgnoreCase("title")) {
                            title = true;
                        } else if (event.asStartElement().getName().getLocalPart().equalsIgnoreCase("author")) {
                            author = true;
                        }
                    } else if (event.isEndElement()) {
                        if (event.asEndElement().getName().getLocalPart().equalsIgnoreCase("book")) {
                            System.out.println("一本书的信息解析完成");
                        }
                    } else if (event.isCharacters()) {
                        if (title) {
                            System.out.println("书名：" + event.asCharacters().getData());
                            title = false;
                        } else if (author) {
                            System.out.println("作者：" + event.asCharacters().getData());
                            author = false;
                        }
                    }
                }
            } catch (XMLStreamException e) {
                e.printStackTrace();
            }
        }
    }
    ```

  - 优点：

    - **灵活性高**：兼具 DOM 和 SAX 的一些优点。既可以在需要时获取特定部分的内容，又不需要像 DOM 那样将整个文档加载到内存中。开发人员可以根据具体的应用场景灵活地拉取和处理事件，使得解析过程更加灵活。例如，在处理一个包含多个不同类型信息模块的 XML 文档时，可以选择性地拉取和处理与特定模块相关的事件。
    - **内存和性能平衡**：对于处理中等大小的 XML 文档比较合适，在内存占用和处理效率上有较好的平衡。它不会像 DOM 那样可能因为文档过大而耗尽内存，同时也不像 SAX 那样在需要对文档进行灵活操作时受到过多限制。

  - 缺点：

    - **编程复杂**：编程模型相对复杂一些，因为需要开发人员主动拉取事件进行处理。相比 SAX 的事件驱动模型，开发人员需要更多地关注解析的流程控制，可能会增加代码的复杂性。例如，在处理多个嵌套的元素开始和结束事件时，需要仔细考虑拉取事件的顺序和逻辑。
    - **性能问题（大型文档）**：在处理非常大型的 XML 文档时，虽然不需要像 DOM 那样占用大量内存，但性能可能不如 SAX，因为拉取事件的过程也会有一定的开销。特别是在只需要简单地顺序提取信息的场景下，StAX 的拉式机制可能会引入额外的性能损耗。

## 解析技术对比

| 比较项目           | DOM 解析                                                     | SAX 解析                                                     | StAX 解析                                                    |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 原理               | 把XML文档加**载进内存**，构建 DOM 树，文档元素、属性、文本等是树的节点 | 基于**事件驱动**，读取 XML 文档时遇到元素开始 / 结束标签、文本等触发事件 | 是**拉式解析**，应用程序主动从 XML 流中拉取事件（如元素开始、结束、文本） |
| 节点访问与操作     | 可以方便地通过节点关系进行访问和修改。例如通过`getChildNodes`、`appendChild`等方法访问子节点和添加节点 | 主要通过事件处理器处理事件来间接访问文档内容，本身不便于节点操作。例如在`startElement`、`endElement`等事件处理方法中记录数据 | 通过主动拉取事件来访问和处理文档内容。如在 Java 中通过`XMLEventReader`的`nextEvent`方法获取事件后进行处理 |
| 内存占用情况       | 需要将**整个XML文档**加载到内存构建 DOM 树，内存占用大，对于**大型文档**可能消耗大量内存 | 不需要在内存中存储整个文档，**内存效率高**，适合大型文档处理 | 不需要构建完整文档结构在内存中，在内存占用上有优势，对**中等**大小文档内存和性能平衡较好 |
| 解析速度           | 构建 DOM 树的过程可能会比较慢，特别是大型复杂文档，不过对于小文档和需要复杂操作时速度尚可 | 解析速**度相对较快**，因为是顺序读取触发事件，没有复杂的树构建过程，适合对文档进行一次扫描提取信息 | 速度介于 DOM 和 SAX 之间，拉取事件过程有一定开销，但在处理**中等大小文**档和灵活操作场景下表现较好 |
| 对文档结构的适应性 | 对于复杂的文档结构处理能力强，方便在文档内部进行复杂操作，如重新组织文档结构、跨元素操作等 | 对于简单的文档结构和只需要**一次扫描**提取部分信息的场景比较适应，处理复杂嵌套结构可能会使事件处理逻辑复杂 | 对于不同复杂度的文档都有一定适应性，既可以处理简单结构，也能通过灵活拉取事件处理复杂结构，但**编程较复杂** |
| 随机访问能力       | 可以**随机访问**文档中的任何节点，方便获取和修改文档任意位置的内容 | **不便于随机访问**，一旦错过某个事件相关内容，很难回溯获取   | 可以根据需要拉取特定事件进行访问，比 SAX 在随机访问上更灵活，但不如 DOM 直接 |
| 编程复杂度         | **编程相对简单**，对于熟悉树形结构操作的开发者比较容易理解和使用 | 编程复杂度中等，需要理解事件驱动模型并正确编写事件处理器，对于复杂文档结构可能增加复杂度 | 编程相对复杂，需要开发者主动控制解析流程，拉取事件进行处理，代码逻辑较复杂 |
