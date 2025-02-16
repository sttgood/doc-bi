---
title: ip管理
article: false
order: 2
---

## 互联网地址资源的管理

互联网起源于美国，90年代前主要是一个用于军事、科研的网络。90年代初，由美国国家基金会为互联网提供资金并代表美国政府与`NSI（Network Solutions Inc.）`公司签订了协议，将互联网顶级域名系统的注册、协调与维护职责都交给了NSI。互联网地址资源则交由`IANA（Internet Assigned Numbers Authority）`分配，由IANA分配到

- `ARIN（American Registry for Internet Numbers` 北美

- `RIPE NCC（Reseaux IP Europeens Network Co-ordination Centre` 欧洲

- `APNIC（Asia-Pacific Network Information Centre` 亚太），

  然后再由这些地区性组织将地址分配给各国家性NIC或大型ISP，最终用户则是从这些国家级的NIC或大型ISP获得IP地址。

由于各国不满由美国控制互联网资源的分配和管理，在1998年10月成立了一家民间性非盈利公司，即`ICANN（Internet Corporation for Assigned Names and Numbers）`，逐步接管互联网域名及地址资源的管理，承担域名系统管理、IP地址分配、协议参数配置等职能。

 

### 1、ICANN

**ICANN**的核心权力机构是ICANN理事会，由19位理事组成。其中包括由一般成员网上投票选出的9位At-Large理事，三大地区注册机构(APNIC，ARIN和RIPE NCC)各委派3位共9位理事，以及1位总裁。

ICANN设三个支持组织：

- ASO（Address Supporting Organization） 地址支持组织，负责IP地址系统管理。
- DNSO（Domain Name Supporting Organization） 域名支持组织，负责DNS管理。
- PSO（Protocol Supporting Organization） 协议支持组织，负责涉及互连协议的唯一参数分配。

### 2、APNIC

**APNIC**成立于1993年，由正在使用或提供网络服务的个人、公司、非政府组织组成，负责亚太地区互联网络地址资源如IP地址、自治系统号（ASN）的分配与注册管理。

APNIC的主要服务有：

（1）互联网资源管理。包括IP地址分配和指定，以及AS号码指定

（2）互联网资源注册。拥有权威的注册及查询服务器：whois

（3）DNS管理，指得是反向域名：in-addr.arpa，负责反向域名解析，而非域名注册中心。

### 3、CNNIC

**CNNIC** (中国互联网络信息中心)是成立于1997年的非盈利管理与服务机构，行使国家互联网络信息中心的职责。CNNIC的主要任务有：

（1）注册服务：域名注册、IP地址分配、自治系统号分配等。

（2）录数据库服务：建立全国最高层次的网络目录数据库；提供对联网用户、网络地址、域名、自治系统号等方面信息的查询服务。

（3）信息服务：进行中国Internet发展状况统计调查；提供有关中国互联网络的政策、法规以及其它Internet相关资料的查询服务等。

（4）网站访客流量认证：为了促进我国Internet信息服务行业的健康发展，倡导网站流量认证的标准，向各站点提供网站访客流量统计认证工作。

## IP申请

![IP地址分配机构](https://zh-hans.ipshu.com/img/public-rir.jpg)

要知道IP地址是如何分配的，我们需要先了解一个机构——国际互联网号码分配机构 (The Internet Assigned Numbers Authority，简称[IANA](https://www.iana.org/)）。它是互联网名称与数字地址分配机构（The Internet Corporation for Assigned Names and Numbers，简称[ICANN](https://www.icann.org/)）旗下的一个机构，主要负责 IP地址和ASN 自治系统号的全球分配、DNS根区域的管理和协议分配。

## 全球分区域分配IP地址

在IP地址管理方面，为了确保跨地区的IP地址公平分配，IANA 会根据全球政策将未分配的IP块池分配给5个区域性互联网注册管理机构（Regional Internet Registries，简称RIRs)：

- [ARIN](https://www.arin.net/) 美洲区：包含北美洲和部分加勒比海地区
- [APNIC](https://www.apnic.net/) 亚太区：包括亚洲和太平洋地区
- [RIPE NCC](https://www.ripe.net/) 欧洲区：包括欧洲、中东、中亚地区
- [LACNIC](https://lacnic.net/) 拉美区：包括拉丁美洲和部分加勒比海地区
- [AFRINIC](https://afrinic.net/) 非洲区：包括非洲地区



再由有需要IP地址的机构向这些RIR提出申请，由他们来协调分配。

## 中国用户申请IP地址方法

例如，中国用户想要获得IP地址，有两种方法：

一种方法是：直接成为APNIC的会员单位，直接从APNIC获得IP地址，但是必须向APNIC交纳2500美元到10000美元不等的年费，而且会员的规模越小，申请地址的难度相对较大；

另外一种方法是：加入一个IP地址分配联盟（以下简称分配联盟），通过分配联盟召集单位向APNIC交纳一定的年费及向召集单位交纳联盟成员费。

中国互联网络信息中心（China Internet Network Information Center，简称CNNIC）以国家NIC的身份于1997年1月成为APNIC的大型会员，成立了以CNNIC为召集单位的分配联盟，我们称为CNNIC分配联盟。按照APNIC的有关规定（APNIC-051），CNNIC分配联盟成员单位可以通过CNNIC获得IP地址号码，CNNIC必须将其分配联盟单位的名单及IP地址分配报告APNIC，同时除了CNNIC向APNIC交纳年费（1万美元）外，CNNIC分配联盟的成员单位还应通过CNNIC向APNIC交纳年费，并每年向CNNIC交纳一定的联盟成员费。

中国的任何单位，只要对IP地址的需求量达到一定要求，而且可能继续向前发展的，就有资格申请加入CNNIC分配联盟。如果只是需要少量地址，也可向CNNIC分配联盟提交详细的申请资料，CNNIC会将其介绍给合适的联盟成员单位或其它的ISP，以便该单位能获得所需的IP地址。对于地域较近，业务上有联系的若干单位，或者自愿合作的若干单位，可联合申请联盟成员资格。

因此任何机构和个人只要向某个ISP交纳规定的费用，就可从该ISP获取所需lP地址的使用权，但各单位的IP地址分配要统一进行规划，统一联入因特网。