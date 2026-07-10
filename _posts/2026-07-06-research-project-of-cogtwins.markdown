---
layout: post
title: "Research Project of Cogtwins Lab"
author: "Jiehan Zhou"
date: 2026-07-06
tags: research cogtwins lab
cover: ""
published: true
---




Selected Research Projects 
1. Intelligent Process Generation System for Executable Assembly (Yu Jinling)
This project aims to use large language models and knowledge engineering technology to solve the problems of traditional aerospace assembly process cards relying on manual compilation, high cost, and heavy dependence on experience, achieving automated generation and safety verification of executable assembly procedures from natural-language task descriptions.
2. Intelligent Operator Generation and Optimization for Heterogeneous Computing Platforms (Wang Wei)
This project uses large language model agents, hardware performance feedback, and an operator optimization knowledge base to solve the problems of traditional high-performance operator development relying on expert experience, high manual tuning costs, and difficult cross-platform migration, achieving automated generation, verification, and iterative optimization of high-performance kernels for target hardware platforms from high-level operator descriptions.
1) Pilot Intelligent Computing Special Project (in collaboration with Sugon)
Guided by curriculum development, on-campus competitions, and national-level competitions, this project explores application pathways for intelligent computing and large-model technology in the automated generation of high-performance kernels. Building on the team's research foundation in large-model inference optimization, domestic hardware adaptation, and parallel computing optimization, the project will develop supporting hands-on training courses centered on heterogeneous computing platforms, organize multiple student teams to carry out operator optimization practice, and use competition-driven learning to enhance students' abilities in modeling, analysis, optimization, and system implementation for complex engineering scenarios.
2) Research on Key Technologies for Efficient Inference and Dynamic Optimization of Large Models on Heterogeneous Platforms (in collaboration with Jinan Supercomputing Center)
Addressing the need for efficient deployment of large language models on heterogeneous computing platforms, this project focuses on core operator execution optimization, dynamic computation graph construction, and input-aware adaptive inference path decision-making methods. Through joint modeling of operator execution characteristics, hardware resource status, and model inference workflows, the project aims to reduce redundant computation, improve computing resource utilization and inference service efficiency, and establish a systematic methodology for collaborative optimization of large models in heterogeneous environments. The related research will provide key technical support for the efficient inference and stable deployment of large models on domestic computing platforms, supercomputing platforms, and edge heterogeneous environments.

3. OpenVLA General-Purpose Vision-Language Robot Manipulation Large Model (Zhang Yuhang)
Based on the OpenVLA vision-language large model architecture, this project addresses the problems of poor generalization, limited scene adaptability, and reliance on dedicated dataset fine-tuning in traditional robot manipulation tasks, achieving end-to-end autonomous perception, reasoning, and precise control for robots based on general-purpose vision-language understanding.
4. (Sun Siyuan)
(1) Multimodal Process Card Intelligent Parsing System
Project goal: Addressing the digitalization needs of manufacturing enterprises for process cards, this project uses multimodal large models, multi-agent workflow orchestration, and visual traceback verification technology to achieve structured parsing and batch processing of process cards from multiple source formats.
Background and functionality: The project targets the problems of diverse process card sources, large layout variation, and high-cost, error-prone manual data entry for clients. It supports multi-source input including Excel, Word, tabular PDF, scanned PDF, and images. The system is built on LangGraph with a multi-agent state flow comprising a router, process expert, visual traceback, and data engineering agents; a VLM generates a structured first draft, which is then verified and corrected using OCR text, confidence scores, bounding boxes, and geometric coordinates.
Technical advantages: The core advantage lies in decoupling semantic understanding from geometric verification: the VLM handles understanding of complex layouts and process semantics, while OCR and coordinate information handle adjudication and traceability. The visual traceback closed loop reduces the risk of hallucination in generative models, and FastAPI, Celery, Redis, Docker, and a dashboard support batch processing and engineering deployment.
Application scenarios: Applicable to process card entry for manufacturing enterprises, PLM/MES system data governance, process knowledge base construction, digitization of historical process documents, quality traceability, and process auditing.
(2)Multi-Source Format 2D Drawing Manufacturing Semantics Intelligent Parsing Project 
Project goal: Addressing the intelligentization needs of industrial software and manufacturing enterprises for drawings, this project extracts dimensions, symbols, views, manufacturing features, and cross-view relationships from multi-source 2D drawings (PNG/JPG, flattened DWG, PDF) and outputs structured manufacturing semantics.
Background and functionality: The project addresses the common problem in downstream manufacturing scenarios of lacking 3D models and the difficulty of reusing the semantic structure of 2D drawings. It carried out DWG flattening, DXF parsing, extraction of graphical elements/text/coordinates, automatic annotation, and manual verification workflows, building a dataset of approximately 10,000 2D engineering drawings and approximately 13,000 coordinate-anchor Q&A samples, and validated a Qwen3-VL 7B LoRA fine-tuning approach.
Technical advantages: The project combines engineering drawing parsing, coordinate-anchor Q&A, multimodal model fine-tuning, and manufacturing semantic structuring, supporting delivery in multiple forms including JSON, knowledge graphs, API/SDK, and private deployment. Preliminary research results improved structural accuracy from approximately 10% to approximately 60%, demonstrating the effectiveness of specialized data and fine-tuning for industrial drawing understanding.
Application scenarios: Applicable to CAD/CAM/CAE/PLM industrial software, manufacturing process auditing, drawing archiving and retrieval, intelligent quoting, process knowledge base construction, cross-view feature matching, and industrial design assistance.
(3)SmartBatchLLM: Adaptive Hybrid Batching for LLM Serving
    Project goal: Addressing the problems in online LLM serving where request lengths vary greatly, short requests are easily blocked by long requests, and it is difficult to balance fairness for long requests, this project studies request-level scheduling and batch composition optimization methods that do not modify the underlying inference engine.
Background and functionality: SmartBatchLLM focuses on mixed-length requests as its core object. Through adaptive length thresholds, latency-aware prioritization, and priority-ordered packing mechanisms, it improves batch composition quality, achieving a more robust trade-off between first-token latency, throughput, and tail latency for long requests.
Technical advantages: The method operates at the scheduling layer and does not depend on modifying underlying inference engines such as vLLM, resulting in low engineering intrusiveness. Compared to simple FCFS or shortest-first approaches, it places greater emphasis on jointly optimizing short-request response speed and long-request fairness. This research also provides reusable ideas for request grouping, latency control, and fairness metrics in LLM serving systems.
Application scenarios: Applicable to online large-model serving platforms, private LLM inference gateways, enterprise intelligent assistant backends, mixed-workload inference services, and generative AI applications with coexisting long and short requests.

部分科研项目
1. 面向可执行装配的智能工序生成系统 （于金令）
该项目旨在通过大语言模型与知识工程技术，解决传统航空装配工艺卡片依赖人工编制、成本高昂、经验依赖强的问题，实现从自然语言任务描述到可执行装配工序的自动化生成与安全验证。

2. 面向异构算力平台的智能算子生成与优化 （王威）
该项目通过大语言模型智能体、硬件性能反馈与算子优化知识库，解决传统高性能算子开发依赖专家经验、人工调优成本高、跨平台迁移困难的问题，实现从高层算子描述到目标硬件平台高性能 Kernel 的自动化生成、验证与迭代优化。
1）先导智算专项（与中科曙光合作）
本项目以教学建设、校内竞赛和国家级赛事为牵引，探索智能计算与大模型技术在高性能 Kernel 自动化生成中的应用路径。依托团队在大模型推理优化、国产硬件适配和并行计算优化等方面的研究基础，项目将围绕异构算力平台构建配套实训课程，组织多支学生团队开展算子优化实践，并通过竞赛驱动提升学生在复杂工程场景下的建模、分析、优化与系统实现能力。
2）面向异构平台的大模型高效推理与动态优化关键技术研究（与济南超算合作）
本项目面向大语言模型在异构计算平台上的高效部署需求，重点研究核心算子执行优化、动态计算图构建以及输入感知的自适应推理路径决策方法。通过对算子执行特征、硬件资源状态和模型推理流程的联合建模，项目旨在减少冗余计算，提升算力资源利用率和推理服务效率，形成面向异构环境的大模型协同优化方法体系。相关研究将为大模型在国产算力平台、超算平台及边缘异构环境中的高效推理与稳定部署提供关键技术支撑。


3. OpenVLA通用视觉语言机器人操作大模型（张宇航）
本项目依托OpenVLA视觉语言大模型架构，解决传统机器人操作任务泛化性差、场景适配单一、依赖专属数据集微调的问题，实现基于通用视觉语言理解的机器人端到端自主感知、推理与精准操控。

4.（孙思源）
（1）多模态工艺卡片智能解析系统
项目目标：面向制造企业工艺卡片数字化需求，利用多模态大模型、多智能体流程编排和视觉回溯校验技术，实现多源格式工艺卡片的结构化解析与批量处理。
研发背景与功能：项目针对客户工艺卡片来源复杂、版式差异大、人工录入成本高且易出错的问题，支持 Excel、Word、表格 PDF、扫描 PDF 和图片等多源输入。系统基于 LangGraph 构建 router、工艺专家、视觉回溯、数据工程等多智能体状态流，由 VLM 生成结构化初稿，再利用 OCR 文本、置信度、bbox 和几何坐标进行校验和修正。
技术优势：核心优势在于将语义理解与几何校验解耦：VLM 负责理解复杂版式和工艺语义，OCR 与坐标信息负责裁判与追溯；视觉回溯闭环能够降低生成式模型幻觉风险；FastAPI、Celery、Redis、Docker 和 Dashboard 支持批量处理与工程部署。
应用场景：可应用于制造企业工艺卡片录入、PLM/MES 系统数据治理、工艺知识库建设、历史工艺文件数字化、质量追溯与工艺审核等场景。
（2）多源格式 2D 图纸制造语义智能解析项目
项目目标：面向工业软件和制造企业的图纸智能化需求，从 PNG/JPG、扁平 DWG、PDF 等多源二维图纸中抽取尺寸、符号、视图、制造特征和跨视图关系，并输出结构化制造语义。
研发背景与功能：项目针对下游制造场景经常缺少三维模型、二维图纸语义结构难以复用的问题，开展 DWG 展平、DXF 解析、图元/文本/坐标提取、自动标注和人工校验流程，构建约 10,000 张二维工程图和约 13,000 个坐标锚点问答样本，并验证 Qwen3-VL 7B LoRA 微调路线。
技术优势：项目将工程图解析、坐标锚点问答、多模态模型微调和制造语义结构化结合起来，可支持 JSON、知识图谱、API/SDK 和私有化部署等多种交付形态；预研结果已将结构正确率从约 10% 提升到约 60%，证明专门数据与微调对工业图纸理解有效。
应用场景：可服务于 CAD/CAM/CAE/PLM 工业软件、制造工艺审核、图纸归档与检索、智能报价、工艺知识库构建、跨视图特征匹配和工业设计辅助等场景。
（3）SmartBatchLLM：面向 LLM Serving 的自适应混合批处理
项目目标：面向在线 LLM Serving 中请求长度差异大、短请求易被长请求阻塞、长请求公平性难以兼顾的问题，研究不修改底层推理引擎的请求级调度与 batch 组成优化方法。
研发背景与功能：SmartBatchLLM 以混合长度请求为核心对象，通过自适应长度阈值、延迟感知优先级和按优先级有序打包机制，提高 batch composition quality，在 first-token latency、吞吐和长请求尾延迟之间形成更稳健的折中。
技术优势：方法工作在调度层，不依赖修改 vLLM 等底层推理引擎，工程侵入性较低；相比单纯 FCFS 或 shortest-first，更强调短请求响应速度与长请求公平性的共同优化；该研究也为 LLM 服务系统中的请求分组、延迟控制和公平性度量提供了可复用思路。
应用场景：可用于在线大模型服务平台、私有化 LLM 推理网关、企业智能助手后端、混合负载推理服务和长短请求共存的生成式 AI 应用。