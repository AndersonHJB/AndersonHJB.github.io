import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	"/en/": "structure",
	"/": [
		"",
		// { text: "Home", icon: "shouye", like: ""},
		// { text: "About Me", icon: "shouye", like: "intro"},
		"intro",
		{
			text: "1v1 About",
			icon: "1v1-3",
			// collapsible: true,
			children: [
				{
					text: "私教笔记",
					icon: "1v1-4",
					link: "/1v1/",
				},
				{
					text: "Python一对一教学",
					icon: "python",
					link: "onepython",
				},
				{
					text: "Python 1v1",
					icon: "python",
					link: "python1v1",
				},
				{
					text: "Python 体系课",
					icon: "python",
					link: "1v1-txk",
				},
				"Notice",
				"Class-guide",
				"ai-model",
				// "Scale-of-charges",
				"math",
				// "VIP",
				"AI-drawing",
				// {
				// 	text: "Column",
				// 	icon: "columnszhuanlan",
				// 	link: "/column.md",
				// }
			]
		},
		{
			text: "Life",
			icon: "life",
			// collapsible: true,
			children: [
				"friendship-link",
				"plan",
				"Now",
				"aboutblog",
				"why-blog",
				"essays",
				"password",
				// "chatgpt",
			]
		},
		// {
		// 	text: "Other",
		// 	icon: "tool",
		// 	// collapsible: true,
		// 	children: [
		// 		"Record_the_class",
		// 		// "vpn",
		// 		"home",
		// 		"Download",
		// 	]
		// },
		{ text: "网站分享", icon: "JC_054", link: "learning_web/" },
		{
			text: "Advertising",
			icon: "guanggaopai",
			collapsible: true,

			prefix: "advertising",
			children: [
				"Python1v1",
			]
		}

	],
	"/column/research-ability/": [
		"00-Why-do-you-need-to-have-research-skills"
	],
	"/1v1/88-Simple-swimming-leech/": [
		{ text: "lecture01", icon: "python", link: "lecture01" },
		{ text: "lecture02", icon: "python", link: "lecture02" },
		{ text: "Exam", icon: "python", link: "lecture03" },
		{ text: "Exam2", icon: "python", link: "lecture04" },
	],
	"travel": "structure",
	"/column/AI大模型实战高手课/": [
		{
			text: "开篇词",
			icon: "rengongzhineng",
			children: [
				"00-开篇词-开发工程师如何进阶为AI应用型人才？",
			]
		},
		{
			text: "第一章：小试牛刀，理解基础概念",
			icon: "rengongzhineng",
			children: [
				"01-洞察本质：从工程学角度看ChatGPT为什么会崛起",
				"02-学好提示工程，轻松驾驭大模型",
				"03-探索智能体世界：LangChain与RAG检索增强生成",
			]
		},
		{
			text: "超燃实战，深度玩转 AI 模型",
			icon: "rengongzhineng",
			children: [
				"04-本地部署：如何本地化部署开源大模型ChatGLM3-6B？",
				"05-大模型微调：如何基于ChatGLM3-6B_Lora构建基本法律常识大模型？",
				"06-RAG实战：基于ChatGLM3-6B+LangChain+Faiss搭建企业内部知识库"
			]
		},
		{
			text: "Tips",
			icon: "rengongzhineng",
			prefix: "Tips",
			children: [
				"01-Windows-ssh-macos-connect",
				"02-git-huggingface-error",
				"03-llamacpp"
			]
		}
	],
	"/column/AI大模型项目落地实战/": [
		{
			text: "开篇词（1讲）",
			icon: "rengongzhineng",
			link: "00-开篇词｜普通开发者遇上AI时代，如何破局？"
		},
		{
			text: "第一章 基本原理（4讲）",
			icon: "rengongzhineng",
			children: [
				"01-原理：一个例子讲清楚Transformer原理.md",
			]
		}
	],
	"/column/Unity-casual-mobile-game-development/": [
		"",
		"00-从0开始做游戏",
		"01-配置开发环境",
		"02-导入整理素材",
		"03-项目规划与方法",
		"04-2D俯视角渲染设置",
		"05-全新输入系统-input-system",
		"06-实现向前跳跃",
		"07-创建动画",
		"08-自适应相机控制",
		"09-实现左右移动",
		"10-创建左右移动动画",
		"11-创建场景-草坪",
		"12-创建场景-马路",
		"13-随机生成物体",
		"14-创建场景-小河",
		"15-无限随机生成地图",
	],
	// "/column/AI-Large-model/LangChain-practice-class/": [
	// 	"",
	// 	"01",
	// ],
	"/column/c-course/": [
		{
			text: "教程",
			icon: "yongyan",
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
			]
		},
		{
			text: "练习",
			icon: "shequ-jihuo",
			prefix: "practice/",
			children: [
				"01-c-function",
			]
		}

	],
	"/medium/": false,
	"/column/StableDiffusion/": [
		{
			text: "开篇词",
			icon: "huihua",
			children: [
				{ text: "如何实现绘画模型自由？", icon: "SVG", link: "01" },
				{ text: "AI 绘画作品集", icon: "SVG", link: "02" },
			]
		},
		{
			text: "热身篇:AI 绘画初体验",
			icon: "huihua",
			children: [
				{ text: "01-WebUI 的 N 大绘图功能", icon: "SVG", link: "03" },
				{ text: "02-如何更精准地控制绘画风格和内容？", icon: "SVG", link: "04" },
				{ text: "03-进阶应用：图生图技巧与创作社区初探", icon: "SVG", link: "05" },
				{ text: "04-实战项目（一）：用 LoRA 制作一个你自己的漫画故事", icon: "SVG", link: "06" },
			]
		},
		{
			text: "基础篇:AI 绘画原理揭秘",
			icon: "huihua",
			children: [
				{ text: "05-旧画师GAN：天生有缺陷还是学艺不精湛？", icon: "SVG", link: "07" },
				{ text: "06-颠覆者扩散模型：直观去理解加噪与去噪", icon: "SVG", link: "08" },
				{ text: "07-AIGC 的核心魔法：搞懂 Transformer", icon: "SVG", link: "09" },
				{ text: "08-巧用神经网络：如何用UNet预测噪声", icon: "SVG", link: "10" },
			]
		},
	],
	"/column/Zero-Based-Data-Thinking-Course/": [
		"01",
		"02",
	],
	"/1v1/53-FanFan/": [
		"01",
	],
	"/1v1/52-Pandora/": [
		{
			text: "游戏开发",
			icon: "idea2",
			children: [
				"02-game",
			]
		},
		{
			text: "题目",
			icon: "yongyan",
			children: [
				"01-quiz"
			]
		}
	],
	"/1v1/49-CaoYuguang/": "structure",
	"/1v1/37-JIngWenn/": "structure",
	"/1v1/36-Ricardo/": [
		"",
		"Project-A",
		"Project-B",
		"Project-B-two",
		"01-kaoshi",
	],
	"/1v1/33-chenyaoyao/": [
		"",
		{
			text: "Homework",
			icon: "python",
			prefix: "2023year",  // 前缀,这部分目录的文件都在 2023year 文件夹下
			children: [
				"01-Assignment01",
				"02-Assignment02",
				"03-qizhonkao",
				"04-hw3",
				"05",
				"06-Assignment4",
				"07",
			]
		}
	],
	"/blog/": "structure",
	"/column/cpp/": [
		"",
		{
			text: "C++教程",
			icon: "language-cpp",
			prefix: "cpp-tutorial/",
			collapsible: true,
			children: [
				"01-cpp-intro",
				"02-cpp-environment-setup",
				"03-cpp-basic-syntax"
			]
		},
		{
			text: "CPP 极速",
			icon: "language-cpp",
			prefix: "cpp_rumen/",
			collapsible: true,
			children: [
				"01",
			]
		},
		{
			text: "补充",
			icon: "language-cpp",
			prefix: "supplement/",
			collapsible: true,
			children: [
				"01-cpp-keyword-intro",
			]
		}
	],
	"/column/document-style-guide/": [
		{
			text: "中文技术文档的写作规范",
			icon: "docs",
			children: [
				"title",
				"text",
				"paragraph",
				"number",
				"marks",
				"structure",
				"reference",
				"filename-should-be-lowercase",
				"camelcase",
			]
		}
	],
	"/column/nlp/": [
		"",
		{
			text: "Base",
			icon: "a-294_nlpf",
			prefix: "base/",
			children: [
				"01",
			]
		}
	],
	"/column/Probability-theory/": [
		"",
		{
			text: "开篇词",
			icon: "MathOperations",
			collapsible: true,
			children: [
				"01",
				"02",
			]
		}
	],
	"/column/Vue-Get-started/": [
		"",
		"01",
	],
	"/column/Mok-asked/": [
		"",
		{
			text: "池建强·创业手记",
			prefix: "Entrepreneurial-notes/",
			icon: "a-bijibenbiji",
			collapsible: true,
			children: [
				"2022/01",
				"2022/02",
				"2022/03",
				"2022/04",
				"2022/05",
			]
		}
	],
	"/1v1/85-AmyXiao/": "structure",
	"/column/CS/base/": [
		{
			text: "基础入门",
			icon: "c",
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
			]
		},
		{
			text: "Tips",
			icon: "blog",
			children: [
				"tips3",
				"tips1",
				"tips2",
			]
		}

	],
	"/1v1/90-Ganglion/": "structure",
	"/column/Rust/": [
		{
			text: "开篇词",
			icon: "rust",
			collapsible: true,
			children: [
				"",
			]
		},
		{
			text: "基础篇 (11讲)",
			icon: "rust",
			collapsible: true,
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
			]
		},
		{
			text: "Tips",
			icon: "rust",
			collapsible: true,
			prefix: "Tips",
			children: [
				"01-Functional-Programming"
			]
		}
	],
	"/letter/": [
		"",
		{
			text: "Abalone",
			icon: "blog",
			prefix: "Abalone/",
			collapsible: true,
			children: "structure"
		},
		{
			text: "2023年",
			icon: "letter",
			children: [
				"2023/01",
				"2023/02",
				"2023/03",
				"2023/04",
				"2023/05",
				// "2023/like",  // tt
				// "2023/heart",  // tt
			]
		},
		{
			text: "2024年",
			icon: "letter",
			children: [
				// "2024/importance",  // kk
				// "2024/one-is-all",  // kk
				"2024/12-gift",
				"life/2024-Year-EveryDay-Message",
				"life/Cook-for-the-wife",
				"life/Wedding-photos",
				"life/change",
				"life/over",
				"life/mv-change",
				"life/2024-Money",
				"life/message",
				"life/20240502",

			]
		},
		{
			text: "怀孕",
			icon: "gift",
			prefix: "pregnancy",
			children: [
				"pregnancy-log",
				"Matters-needing-attention",
			]
		},
		{
			text: "Book Write",
			icon: "book",
			prefix: "book-write",
			children: [
				"01",
				"write-data",
			]
		}
		// {
		// 	text: "NoteBook",
		// 	icon: "letter",
		// 	collapsible: true,
		// 	children: [
		// "2023/heart",
		// "2023/like",
		// ]
		// }
	],
	"/column/Python-Flask/": [
		"",
		{
			text: "Python Flask Web开发入门与实战",
			collapsible: true,
			children: [
				"Project1/01.md",
				"Project1/02.md",
			]
		}
	],
	"/enlighten/": [
		"",
		{
			text: "2023年",
			icon: "dongwutubiao-xianxing-tuzi",
			collapsible: true,
			children: [
				{ text: "2023跨年演讲｜这个思路有启发！「全文稿」", icon: "idea2", link: "2023-Friend-of-Time-Enlighten" },
			]
		}

	],
	"/column/book/The-Three-Body-Problem/": [
		{ text: "三体首页", icon: "book", link: "README.md" },
		{
			text: "三体1:地球往事",
			icon: "book1",
			collapsible: true,
			children: [
				"第一部-地球往事/01",
				{
					text: "第一章:科学边界",
					icon: "book1",
					children: [
						"第一部-地球往事/02",
					]
				},

			]
		},

	],
	"/learning_web/": [
		"",
		"Open-source",
		"Learning-Websites",
		"Browser",
		"Resource-Website",
		"Design-websites-to-share",
		"Personal",
		"blog",
	],
	"/1v1/46-Jenny/": "structure",
	"/1v1/27-111923/": [
		{
			text: "题目",
			icon: "python",
			children: [
				"01",
				"02",
				"03",
				"04",
			]
		},
		{
			text: "Answer",
			icon: "python",
			prefix: "Answer",
			children: [
				"01-Answer",
				"02-Answer",
				"03-Answer",
				"04-Answer",
			]
		}
	],
	"/1v1/26-Shoop/": [
		"01-question"
	],
	"/1v1/24-Borghi/": [
		"01",
		"02",
		"03",
	],
	"/1v1/21-YuXinyi/": [
		{
			text: "Python 回顾",
			icon: "python",
			collapsible: true,
			children: [
				"01-function",
			]
		}

	],
	"/1v1/43-JoJunYan/": [
		{
			text: "Final review",
			icon: "python",
			children: [
				"01",
				"02-Unit1",
				"03-Unit2",
				"04",
				"05",
				"06",
			]
		}
	],
	"/1v1/22-DongYuhang/": [
		{
			text: "Problem",
			collapsible: true,
			icon: "python",
			children: [
				"01-lab01",
				"02-lab02",
				"03-NYU-Tandon-School-of-Engineering",
				{ text: "04-Homework02", icon: "python", link: "04-NYU-Tandon-School-of-Engineering-Homework02" },
				{ text: "05-Homework03", icon: "python", link: "05-HW03" },
				{ text: "06-Homework04", icon: "python", link: "06-HW04" },
				{ text: "07-Exam-1-Review-CS-1114-Spring-2022", icon: "python", link: "07-Exam-1-Review-CS-1114-Spring-2022" },
				"08-CS-UY-1114-Intro-to-Programming-Problem-Solving",
			]
		},
		{
			text: "Answer",
			icon: "python",
			prefix: "Answer",
			collapsible: true,
			children: [
				"01-lab01_answer",
				"02-NYU-Tandon-School-of-Engineering",
				{ text: "04-Homework02", icon: "python", link: "04-NYU-Tandon-School-of-Engineering-Homework02" },
				{ text: "05-Homework03", icon: "python", link: "05-HW03" },
			]
		}
	],
	"/1v1/40-yushu/": [
		{
			text: "HomeWork",
			icon: "yongyan",
			children: [
				"",
				"01",
				"Final-Project-K-Means-Clustering",
				"02",
			]
		},
		{
			text: "School",
			icon: "gongsi",
			prefix: "2034-python-bris",
			children: [
				{ text: "Introductory Scientific Computing - SCIF10001", icon: "github", link: "01" },
				{ text: "Introductor", icon: "github", link: "02" },
				{ text: "Introductc1", icon: "github", link: "03" },
				{ text: "Introduccing - SCIF10001", icon: "github", link: "04" },
				{ text: "quiz", icon: "github", link: "05" },
			]
		},

	],
	"/1v1/16-mdm505/": [
		"",
		"01",
		"02",
		"03",
	],
	"/1v1/18-Jason/": [
		"",
		{
			text: "博客搭建",
			icon: "blog",
			collapsible: true,
			children: [
				"01",
				"02",
				"03",
			]
		},
		{
			text: "Unity",
			icon: "unity",
			children: [
				"04",
			]
		},
		{
			text: "汇总",
			icon: "blog",
			collapsible: true,
			children: [
				"command",
			]
		}
	],
	"/column/ChatGPT-Midjourney/": [
		{
			text: "1. AI 前沿课",
			icon: "rengongzhineng",
			// icon: "rengongzhinengdanao",
			// icon: "icon-rgb_jiqixuexisuanfayinqing",
			prefix: "AI-leading-edge",
			children: [
				{ text: "你的 AI 副驾", icon: "chat1", link: "01" }
			]
		},
		{
			text: "2. AI 绘画🎨",
			icon: "huahua",
			prefix: "How-to-use-AI-for-painting/",
			children: [
				{ text: "前言｜你的专属设计师", icon: "huabi", link: "01" },
				{ text: "01｜AI 绘画方法是什么？", icon: "huabi", link: "02" },
				{ text: "02｜怎样为打造多风格形象?", icon: "huabi", link: "03" },
				{ text: "03｜怎样给宠物创造Q版形象?", icon: "huabi", link: "04" },
				{ text: "04｜怎样定制你的专属壁纸？", icon: "huabi", link: "05" },
				{ text: "05｜怎么=样快速上手品牌 logo 设计？", icon: "huabi", link: "06" },
			]
		},
		{
			text: "3. 清单",
			icon: "zhanwaituiguangguanggaoshuju",
			prefix: "Models/",
			children: [
				"list",
			],
		},
		{
			text: "4. 加餐",
			icon: "chat",
			prefix: "StableDiffusion",
			children: [
				"01"
			]
		},
		{
			text: "5. Public",
			icon: "mysql",
			prefix: "public",
			children: [
				"/column/ChatGPT-Midjourney/How-to-use-AI-for-painting/00",
				"01",
				"02-draw-prompt",
				"03-ChatGPT-list",
				"04-ChatGPT-Role-presupposition",
			]
		},
		{
			text: "ChatGPT Prompt",
			icon: "rengongzhinengdanao",
			prefix: "wuenda/",
			children: [
				"01-Introduction"
			]
		}
	],
	"/column/Python-data-visualization/": [
		{
			text: "案例上手 Python 数据可视化",
			icon: "home",
			collapsible: true,
			children: [
				"",
				"01",
			]
		},
		{
			text: "Matplotlib Python 数据可视化",
			icon: "home",
			collapsible: true,
			prefix: "Matplotlib",
			children: [
				"",
				{
					text: "0.介绍",
					icon: "python",
					children: [
						"01",
						"02",
					]
				},
				{
					text: "1.画图元素",
					icon: "python",
					children: [
						"03",
						"04",
					]
				}
			]
		},
	],
	"/1v1/30-TangRujia/": [
		"",
	],
	"/1v1/29-Wulili/": [
		"",
	],
	"/1v1/15-Lantern_Fs/": [
		"",
	],
	"/column/Computer-basic-practical-course/": [
		"",
		{
			text: "开篇词 (1讲)",
			icon: "caozuoxitong",
			collapsible: true,
			children: [
				"00",
			]
		},
		{
			text: "以史为鉴 (3讲)",
			icon: "caozuoxitong",
			collapsible: true,
			children: [
				"01",
				"02",
				"02-1",
			]
		},
		{
			text: "硬件-芯片(手写MiniCPU)(10讲)",
			icon: "caozuoxitong",
			collapsible: true,
			children: [
				"03",
			]
		},
	],
	"/1v1/62-SuzIhAn/": [
		{
			text: "HomeWork",
			icon: "employee-rank",
			prefix: "Homework",
			children: [
				"Lab2",
				"Lab3",
				"Lab4",
				"Lab5",
				"Lab6",
				"Lab7-Street-Craps",
				"Homework1",
				"Homework2",
				"Homework3",
				"Homework3-1",
				"Homework4",
				"Homework5",
				"Homework6",
				"Homework7",

			]
		},
	],
	"/1v1/39-xiaohonshu/": [
		{ text: "01-个性签名", icon: "a-jibijilianxibianji", link: "README.md" },
		{ text: "02-YOYO 练习题", icon: "a-jibijilianxibianji", link: "q1" },
		{ text: "02-暴躁的老铁", icon: "a-jibijilianxibianji", link: "q2" },
		"q3",
		"q4",
		"q5",
		"q6",
		"q7",
	],
	"/1v1/34-WangQien/": [
		{
			text: "答疑",
			icon: "fankuifaqs",
			children: [
				"",
				"01-fuxi",
				"02",
			]
		}
	],
	"/1v1/38-coisini/": [
		"",
	],
	"/1v1/28-GaoTianQi/": [
		"",
		{
			text: "2023 Semester1",
			collapsible: true,
			icon: "python",
			children: [
				"01-W00-Worksheet-0-Building-blocks",
			]
		},
		{
			text: "答疑",
			icon: "fankuifaqs",
			collapsible: true,
			children: [
				"Question01",
				"01-The-Culprit",
				"02-Canner-can",
				"03-Dodgy-Brothers-Price-List",
				"04-Chess-Problem-v4",
				"05-All-Question",
				"06-Assignment01",
				"08-Practice-Mid-Semester-Test-April-2023",
				"09-fuxi01",
				"11-P2-Project2-FoCdle",
				"12-Project-Answer",
			]
		},
		{
			text: "Review",
			icon: "python",
			collapsible: true,
			children: [
				"07-review-question",
				"10-unimelb-COMP10001-Mid-term-review",
				"13-exam-2019s1",
				"14-Practice-Exam-May2023",
			]
		},
		{
			text: "C",
			icon: "cpp",
			collapsible: true,
			children: [
				"16-C1",
				"17-quiz",
				"18-middle-quiz",
				"19-look-like",
				"20-Quiz",
				"/column/Python-core-technology-and-practice/Algorithm/02",
				"21-project01",
				"22-Practice-Quiz",
				"23-Coursework02-A-Game-Implemented-with-Tkinter",
			]
		},
		{
			text: "项目",
			icon: "github",
			collapsible: true,
			prefix: "Project/",
			children: [
				"01-Project1-Matching-Game",
				"02-Project2-FoCdle",
				"03-comp10002-Foundations-of-Algorithms-Semester2-2023-Assignment1",
				"04-comp10002-Foundations-of-Algorithms-Semester2-2023-Assignment2",
				{
					text: "Point",
					icon: "mysql",
					prefix: "point/",
					// collapsible: true,
					children: [
						"00-list",
						"01-typedef",
					]
				}
			]
		},
		{
			text: 'Java',
			icon: 'java',
			children: [
				"24-ShadowTaxi"
			]
		}
	],
	"/column/ChatGPT/": [
		"",
		{
			text: "ChatBot",
			icon: "rengongzhineng",
			prefix: "Chatbot",
			children: [
				"01",
			]
		},
		{
			text: "ChatGPT Manual",
			icon: "chat",
			prefix: "ChatGPTManual/",
			children: [
				"01",
				"02",
			]
		},
		{
			text: "ChatPPT",
			icon: "PPT",
			prefix: "ChatPPT",
			children: [
				"01",
				"02",
			]
		}
	],
	"/column/Data-Structures-and-Algorithms/": [
		"",
		{
			text: "01-Recursion",
			icon: "guidang",
			prefix: "01-Recursion/",
			children: [
				"01-Hanoi",
				"02-Frog-Jumping-Stairs",
			]
		}
	],
	"/column/clang-tutorial/": [
		"",
		"intro",
		"syntax",
		"variable",
		{
			text: "Lab",
			collapsible: true,
			icon: "cyuyan",
			prefix: "Lab",
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
			]
		},
		{
			text: "FAQ",
			icon: "cyuyan",
			prefix: "FAQ",
			children: [
				"01",
			]
		}
	],
	"/column/download/": [
		"",
		"最好用的Markdown编辑器Typora破解指南",
	],
	"/column/Django-fast-development-practice/": [
		// "",
		{ text: "Django首页", icon: "django", link: "/column/Django-fast-development-practice/" },
		{
			text: "Django 学习笔记",
			icon: "django",
			prefix: "Django-Study-Notes",
			children: [
				{
					text: "卷一:从Django入手",
					icon: "django",
					children: [
						{ text: "01-Django入门", icon: "django", link: "01-Start-with-Django" },
						{ text: "02-用户账户", icon: "django", link: "02-Django-User" },
					]
				}
			]
		},
		{
			text: "初识Django (4讲)",
			icon: "django",
			children: [
				{ text: "课程介绍", icon: "django", link: "chapter01/01-django-intro" }
			]
		},
		{
			text: "Django Tips",
			icon: "django",
			prefix: "Tips",
			children: [
				{ text: "Django 更换数据库为 Mysql", icon: "django", link: "01-Django-changes-the-database-to-mysql" },
				{ text: "Django 实现评论系统", icon: "django", link: "02-Django-comments" },
				{ text: "如何编写自定义的模板标签和过滤器", icon: "django", link: "03-custom-template-tags" },
			]
		},
		{
			text: "随笔教程",
			icon: "django",
			prefix: "gossip",
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"Markdown",
			]
		}
	],
	"/popular-science/": [
		"",
		"01-How-does-OBS-multiplex-push",
	],
	// "/blog/The-public-class/": [

	// 	{ "text": "01-初识Kitten", link: "01-初识Kitten",}
	// ],
	"/column/git/": [
		"",
		{
			text: "入门基础",
			icon: "git",
			children: [
				"base/01",
				"base/02",
				"base/03",
				"base/04",

			]
		}

	],
	"/column/svg-tutorial/": [
		"",
		"svg-intro",
		"svg-example",
		"svg-inhtml",
		"svg-rect",
		"svg-circle",
		"svg-ellipse",
		"svg-line",
		"svg-polygon",
		"svg-polyline",
		"svg-path",
		"svg-text",
		"svg-stroke",
	],
	"/column/Python-practice/": [
		{
			text: "墨尔本大学 Python",
			icon: "python",
			children: [
				"The-University-of-Melbourne/exam-2016s1",
				"The-University-of-Melbourne/exam-2019s2",
				"The-University-of-Melbourne/exam-2022-online",
			]
		},
		{
			text: "答案",
			icon: "python",
			children: [
				{
					text: "墨尔本大学 Answer",
					icon: "python",
					children: [
						{ text: "exam-2016s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2016s1-solution" },
						{ text: "exam-2017s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2017s1-solution" },
						{ text: "exam-2018s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2018s1-solution" },
						{ text: "exam-2019s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2019s1-solution" },
						{ text: "exam-2019s2-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2019s2-solution" },
						{ text: "exam-2022-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2022-solution" },

					]
				}
			]
		}
	],
	"/column/Basic-course-of-artificial-intelligence/": [
		{
			text: "开篇词 (1讲)",
			icon: "rengongzhineng",
			children: [
				"detail/chapter01/01",
			]
		},
		{
			text: "数学基础 (7讲)",
			icon: "rengongzhineng",
			children: [
				"chapter02/01"
			]
		}
	],
	"/column/Final-Cut-Pro/": [
		{
			text: "Question",
			icon: "icon_answer",
			prefix: "Question/",
			children: [
				"01-Question1",
			]
		}
	],
	"/column/video_loging/": [
		"",
		{
			text: "研究🧐",
			icon: "readingandwritingabookwithinkandafeather",
			prefix: "Question",
			children: [
				"01-Apollo",
			]
		},
		{
			text: "Plan",
			icon: "guanggao1",
			children: [
				"update_plan"
			]
		},
		// {
		// 	text: "Gifts",
		// 	icon: "gift",
		// 	prefix: "gifts/",
		// 	children: [
		// 		"vpn"
		// 	]
		// }
	],
	"/column/shangshou/": [
		{
			text: "Shangshou",
			icon: "home",
			link: "shangshou",
		},
		{
			text: "从上「手」到「上」手",
			icon: "employee-rank",
			prefix: "From-upper-hand-to-master-hand/",
			children: [
				"01",
			]
		},
		{
			text: "有效训练你的研究能力",
			icon: "chat",
			prefix: "research-ability/",
			children: [
				"00-Why-do-you-need-to-have-research-skills",
				"01-Three-essential-types-of-awareness-for-research",
			]
		},
		{
			text: "上手：教你如何快速掌握一项技能",
			icon: "blog",
			prefix: "Getting-Started-Teaching-You-How-to-Quickly-Master-a-Skill/",
			children: [
				"",
				"00-Introduction-Wherever-you-want-to-go-start-from-where-you-are",
				"01-Part-1-Getting-the-Hang-of-It",

			]
		}
	],
	"/column/DeepSeek-Application-Development-Practical-Guide/": [
		{
			text: "开篇词",
			icon: "rengongzhineng",
			link: "",
		},
		{
			text: "前置课程：快速入门 DeepSeek 以及 AI 开发必备技术",
			icon: "blog",
			children: [
				"00",
				"01",
			]
		}
	],
	"/column/An-introductory-programming-class-that-anyone-can-learn/": [
		{
			text: "开篇词 (1讲)",
			icon: "code",
			children: [
				"detail/chapter01/01",
			]
		},
		{
			text: "语言基础篇 (13讲)",
			icon: "code",
			children: [
				"detail/chapter02/01"
			]
		}
	],
	// "/blog/vuepress/": "structure",
	"/ps/": [
		"01",
		"02",
	],
	"/1v1/79-SuKungran/": "structure",
	"/column/Python-core-technology-and-practice/": [
		{
			text: "开篇词",
			collapsible: true,
			icon: "python",
			children: [
				"00",
			],
		},
		{
			text: "基础篇",
			icon: "python",
			collapsible: true,
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
			],
		},
		{
			text: "进阶篇",
			icon: "python",
			collapsible: true,
			children: [
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
			]
		},
		{
			text: "Supplement",
			icon: "python",
			collapsible: true,
			prefix: "supplement/",
			children: [
				"01-why-args-kwargs",
				"02-if-not",
				"03-python-dictionary-comprehension-guide-and-examples",
				"04-Python-Logic-Pitfalls-Changing-Lists",
			]
		},
		{
			text: "Binary-search",
			icon: "python",
			collapsible: true,
			prefix: "Binary-search",
			children: [
				"00",
				"01",
				"practice",
			]
		},
		{
			text: "Algorithm",
			icon: "shujujiegou1",
			prefix: "Algorithm/",
			children: [
				{
					text: "第1章：你需要了解的算法基础",
					icon: "yongyan",
					collapsible: true,
					children: [
						"01",
						"02",
					]
				},


				"12",
				"13",
				"14",
				"15",
				"19",
				"40",
			]


		},
		{
			text: "随笔",
			icon: "idea",
			prefix: "Casual-essay/",
			children: [
				"01-binary-tree"
			]
		}
	],
	"/1v1/64-MKQ/": [
		{
			text: "Python Analytics",
			icon: "dev",
			prefix: "IEORE4502_001_2023_3-Python-for-Analytics/",
			children: [
				{
					text: "Getting Started",
					icon: "laboratorylab",
					prefix: "Getting-Started/",
					children: [
						"01-Prepare-for-Technological-Success",
						"02-Observe-Proper-Netiquette",
					]
				},
			]
		},
		{
			text: "TOOLS FOR ANALYTICS",
			icon: "dev",
			prefix: "IEORE4501_001_2023_3-TOOLS-FOR-ANALYTICS",
			children: [
				{
					text: "01 - Fundamentals",
					icon: "laboratorylab",
					prefix: "01-Fundamentals",
					children: [
						"01-How-to-Complete-the-Homeworks",
					]
				}

			]
		}
	],
	"/1v1/97-Loyal/": "structure",
	"/1v1/65-ihatesilentletter": "structure",
	"/1v1/69-OuyangYijie/": "structure",
	"/1v1/96-Four-dimensional/": [
		{
			text: "Lab",
			icon: "laboratorylab",
			children: [
				"CSCA20-Lab1",
				"CSCA20-Lab2",
				"CSCA20-Lab3",
				"CSCA20-Lab4",
				"CSCA20-Lab5",
				// "CSCA20-Lab6",
				// "CSCA20-Lab7",
			]
		},
		{
			text: "HomeWork",
			icon: "lianxi",
			children: [
			]
		},
		{
			text: "Review",
			icon: "idea",
			children: [
				"2022F_TT2",
				"yufa"
			]
		}
	],
	"/1v1/63-BiLLLL/": [
		{
			text: "HomeWork",
			icon: "doc",
			prefix: "Homework/",
			children: [
				"Econometric-Python-Lab-Assignment1"
			]
		}
	],
	"/column/AI-Large-model/": [
		{
			text: "卷一: AI 大模型",
			icon: "moxing",
			children: [
				{ text: "GPT 来了", icon: "chat1", link: "01" },
				{ text: "你的贴身助理", icon: "chat1", link: "02" },
				{ text: "01-让我们学会和AI说话", icon: "chat1", link: "03" },
				{ text: "02-如何利用大语言模型做情感分析？", icon: "chat1", link: "04" },
				{ text: "03-巧用提示语，说说话就能做个聊天机器人", icon: "chat1", link: "05" },
			]
		},
		{
			text: "LangChain 基础介绍及案例讲解",
			icon: "message-language",
			prefix: "LangChain/51/",
			children: [
				"00",
				"01",
				"02",
				"03",
			]
		},
		{
			text: "加餐",
			icon: "readingandwritingabookwithinkandafeather",
			prefix: "extra_meal/",
			children: [
				"01",
				{
					text: "知识点补充",
					icon: "shequ-jihuo",
					collapsible: true,
					children: [
						"01-1",
						"01-2",
						"01-3",
						"01-4",
					]
				}
			]
		},
		{
			text: "智能客服",
			icon: "zhuanjiaketang-jihuo",
			prefix: "AI-customer-service",
			children: [
				"",
				"01",
			]
		},
		{
			text: "LangChain 实战课",
			icon: "shequ-jihuo",
			prefix: "LangChain-practice-class",
			children: [
				"",
				"01",
			]
		}

	],
	"/column/Teacher-certificate/": [
		"01",
		"02",
		"03",
	],
	"/1v1/48-Bob/": "structure",
	"/column/Turtle/": [
		"",
		{
			text: "基础教程",
			icon: "Turtle",
			prefix: "Base-Turtle",
			children: [
				"01",
			]
		}
	],
	"/column/摄影入门课/": [
		{
			text: "开篇词 (1讲)",
			collapsible: true,
			icon: "cameraadd",
			children: [
				"",
			]
		}
	],
	"/1v1/20-Frank/": [
		{
			text: "题目",
			icon: "docs",
			collapsible: true,
			children: [
				"",
				"01",
				"02",
				"03",
			]
		},
		{
			text: "答案",
			icon: "python",
			collapsible: true,
			prefix: "answer",
			children: [
				"Answer1",
			]
		}
	],
	"/1v1/13-liuyiton": [
		"",
		"01",
		"02",
	],
	"/1v1/04-TommyTian": [
		"01",
		"02-PROJECT-4-REVIEW-EXERCISES",
		"03-Keep-working-on-your-midterm-sites",
		"04-HW04",
		"05-web-notebook",
		"06-Answer",
		"07-Homework05",
		"08-Lab8",
		"09-Homework06",
		"10-Homework07",
		"11-Homework08",
		"12-CS-UY-1114-Python",
		"13-查缺补漏",
		"12-HomeWork09",
		"13-Homework10",
		"14-Review",
	],

	"/1v1/03-Dannie": [
		{
			text: "阶段一:Python基础",
			collapsible: true,
			icon: "python",
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
			]
		}
	],
	"/column/R-Course/": [
		{
			text: "R 快速入门",
			icon: "moxing",
			prefix: "base/",
			children: [
				"01",
				"02",
			]
		}
	],
	"/1v1/68-GUI-Zhiyi-Engineering/": [
		{
			text: "HomeWork",
			icon: "laboratorylab",
			prefix: "HomeWork",
			children: [
				{ text: "Exercises 1", icon: "linux", link: "01-Variables-assignment-and-operator-precedence" },
				{ text: "Exercises 2", icon: "linux", link: "02-Control-statements" },
				{ text: "Exercises 3", icon: "linux", link: "03-Types-type-conversions-and-floating-point-arithmetic" },
				{ text: "04-Math", icon: "linux", link: "04-Math" },
			]
		}
	],
	"/1v1/73-MKQ/": "structure",
	"/1v1/76-Jianxin-Berkeley-Optoelectronics/": "structure",
	"/letter/36-stratagem": [
		"",
		"01",
		"02",
	],

	"/1v1/60-wudi/": [
		{
			text: "HomeWork",
			icon: "idea2",
			prefix: "HomeWork/",
			children: [
				"Exercise0",
				"Exercise1",
				"Exercise2",
				"Exercise3",
				"Exercise4",
				"Exercise5",
				"Exercise6",
				"Exercise7",
				"ma407_AT23_assessedcw-instructions",
			]
		},
		{
			text: "Question",
			icon: "mysql",
			prefix: "Question/",
			children: [
				"Question1",
			]
		},
	],
	"/1v1/59-x_10/": [
		"01",
		"02",
		"03",
	],
	"/1v1/58-sbhw/": "structure",

	"/column/macOS-Tips/": [
		"",
		"01-macOS入门指南",
		"02-macOS常用快捷键",
		"03-macOS常见问题",
		"04-macOS软件清单",
		"05-macOS软件自用",
		"06-macOS软件技巧",
		"07-macOS整理技巧",
		"08-macOS效率指南",

	],
	"/1v1/54-BananaYuShu/": [
		"",
		{
			text: "MATH20017",
			icon: "MathOperations",
			collapsible: true,
			prefix: "MATH20017",
			children: [
				{ text: "Welcome Page", icon: "shujujiegou", link: "01" },
				{
					text: "Lecture Notes",
					icon: "guidang",
					prefix: "Lecture-Notes/",
					children: [
						{ text: "Lecture 0", icon: "employee-rank", link: "Lecture0" },
						{ text: "Lab 1", icon: "employee-rank", link: "Lab1" },
					]
				}
			]
		},
		{
			text: "Other",
			icon: "laboratorylab",
			prefix: "Other",
			collapsible: true,
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				// "07",
				// "08",

				{ text: "Test 1 Data Science 1", icon: "MathOperations", link: "08" },
				"09",
				"10",
				"11",
				"12",
				"13",
				"14-Test4",
				"15",
				"16",
				"17",
				"18",
				"Assessment-Nearest-and-Furthest",
				"SCIF30005-Forest-Fire-Mini-Project",
			]
		},
		{
			text: "Statistics 2 2023",
			icon: "cib-r",
			prefix: "Statistics22023",
			collapsible: true,
			children: [
				{ text: "Practical 1", icon: "MathOperations", link: "01-Statistics2-Computer-Practical1" },
				{ text: "Practical 2", icon: "MathOperations", link: "02-Statistics2ComputerPractical2" },
				{ text: "Practical 3", icon: "MathOperations", link: "03-Statistics3ComputerPractical3" },
			]
		},
		{
			text: "Algorithms and Machine Learning 2023",
			icon: "shouye",
			prefix: "Algorithms-and-Machine-Learning-2023",
			collapsible: true,
			children: [
				{ text: "coursework 1", icon: "MathOperations", link: "Assessed-coursework1" },
				{ text: "coursework 2", icon: "MathOperations", link: "Assessed-coursework2" },
				{ text: "coursework 3", icon: "MathOperations", link: "Assessed-coursework3" },
				{ text: "coursework 4", icon: "MathOperations", link: "Assessed-coursework4" },
				{ text: "coursework 5", icon: "MathOperations", link: "Assessed-coursework5" },
				"Assessment1",
			]
		},
		{
			text: "Review",
			icon: "python",
			prefix: "Review",
			children: [
				"01-Algorithm",
			]
		}
	],
	"/1v1/61-XuXin-Nora/": [
		{
			text: "串「乱」讲",
			icon: "message-language",
			prefix: "String-disorderly-talk",
			children: [
				"Question",
				"01",
			]
		},
	],
	// "/Vpn-clash-win-mac/": "structure",
	"/1v1/72-zhangborui": "structure",
	"/1v1/41-ZhengHaoyuan/": [
		{
			text: "Old",
			icon: "zhuanjiaketang-jihuo",
			// collapsible: true,
			children: [
				"",
				"01",
				"02-CS-UY-1114-Final-Review",
				"03-Lab1",
				"04-Lab3",
				"06-Topic",
				"07-dh-Midterm-Exam",
				"08-fuxi",
				"09-fuxi2",
			]
		},
		{
			text: "HomeWork",
			icon: "laboratorylab",
			// collapsible: true,
			prefix: "HomeWork",
			children: [
				{ text: "Homework1", icon: "mysql", link: "Homework1" },
				{ text: "Homework2", icon: "mysql", link: "Homework2" },
				{ text: "Homework3", icon: "mysql", link: "Homework3" },
				{ text: "Homework4", icon: "mysql", link: "Homework4" },
				{ text: "Homework5", icon: "mysql", link: "Homework5" },
				{ text: "Homework6", icon: "mysql", link: "Homework6" },
				{ text: "Homework7", icon: "mysql", link: "Homework7" },
				{ text: "Homework8", icon: "mysql", link: "Homework8" },
				{
					text: "Lab Answer",
					icon: "shequ-jihuo",
					collapsible: true,
					prefix: "Answer",
					children: [
						{ text: "Homework1-Answer", icon: "zhuanjiaketang-jihuo", link: "Homework1-Answer" },
					]
				},
			]
		}
	],
	"/1v1/77-xiaoxianyue/": "structure",
	"/1v1/78-scott-guan2008/": "structure",
	"/1v1/75-chen/": "structure",
	"/1v1/70-WuYue/": [
		{
			text: "HomeWork",
			icon: "language-fortran",
			prefix: "HomeWork",
			children: [
				"01-HomeWork1",
				"02-HomeWork3",
				"03-HomeWork4",
				"04-HomeWork5",
				"05-HomeWork6",
				"06-HomeWork7",
				"07-HomeWork8",
			]
		},
		{
			text: "Question",
			icon: "shequ-jihuo",
			prefix: "Question",
			children: [
				"Question1",
				"Question2",
				"Question3",
				"Question4",
			]
		}
	],

	"/1v1/66-doubao/": "structure",
	"/1v1/67-Doncic/": "structure",
	"/1v1/56-YY-University-of-Pennsylvania/": [
		"Homework3",
	],
	"/1v1/57-Ren-Xinxing-gatech-edu-USA/": "structure",
	// [
	// 	"Part0",
	// 	"R-hw01",
	// 	"01-Midterm-Exam-Part-2-Computation",
	// ],
	"/1v1/55-Mooncake-eason/": [
		"01-hw1",
	],

	"/1v1/35-LiuYirao/": [
		{
			text: "Quiz",
			icon: "lianxi",
			children: [
				"",
				"01-While",
				"02-Programming-Assignment2",
				"03-Assignment2_MultipleChoice",
				"04-1004_assignment2_programming",
				"05-Final-Project",
				"06-codingbat",
				"07-MATLAB-Tutorial-for-Calculus-III-Part-1",
				"08-uic-python-all-quiz",
				"09-monikao",
				"10-lianxi",
				"11-quiz7",
			]
		}
	],
	"/1v1/45-wangxuerou/": [
		"01"
	],
	"/1v1/23-gengmiao/": [
		"01",
		"02",
	],
	"/1v1/12-T0Mnn": [
		"01-Diploma-in-Information-Technology",
		"01",
	],
	"/1v1/07-AJuN": [
		"01-W14-Worksheet-14-File-IO-and-CSV-Files",
		"02-Wugs",
		"03-Exam-Foundations-of-Computing-COMP10001_2022_SM2",
	],
	"/1v1/06-KAI/": [
		{
			text: "一、Web",
			icon: "web",
			collapsible: true,
			children: [
				{ text: "01-Assignment-1-Unix", icon: "web", link: "01-Assignment-1-Unix" },
				{ text: "02-Assignment2-HTML", icon: "web", link: "04-Assignment2-HTML" },
				{ text: "03-Assignment3-CSS", icon: "web", link: "05-Assignment3-CSS" },
				{ text: "04-Assignment4 Raster Graphics", icon: "web", link: "08-Assignment4-Raster-Graphics" },
				{ text: "05-Assignment5-Vector-Graphics", icon: "web", link: "09-Assignment5-Vector-Graphics" },
				{ text: "06-Assignment 6: Website Layout", icon: "web", link: "11-Assignment-6-Website-Layout" },
				{ text: "07-Final-Project", icon: "web", link: "13-Final-Project" },
				{ text: "08-Macro-Assignment-01-HTML-CSS-HelloWorld", icon: "web", link: "16-Macro-Assignment-01-HTML-CSS-HelloWorld" },
				{ text: "09-Macro Assignment 02: Everything is Awesome!", icon: "web", link: "17-Macro-Assignment02-Everything-is-Awesome" },
				{ text: "10-Lab01-web", icon: "web", link: "19-Lab01-web" },
				{ text: "11-Lab02-web", icon: "web", link: "20-Lab02-web" },
				{ text: "12-Lab03-web", icon: "web", link: "21-Lab03-web" },
				{ text: "13-Gotta Catch em All!", icon: "web", link: "22-Macro-Assignment-03-Gotta-Catch-em-All" },
				{ text: "14-Lab04-web", icon: "web", link: "23-Lab04-web" },
				{ text: "15-Assignment04", icon: "web", link: "24-Macro-Assignment04-Harry-Potter-and-the-Chamber-of-the-DOM" },
				{ text: "16-kaoshi", icon: "web", link: "26-kaoshi" },
				{ text: "17-Assignment05", icon: "web", link: "27-Assignment05" },
				{ text: "18-Micro-Assignment06", icon: "web", link: "29-Micro-Assignment06" },
				{ text: "19-Assignment06-Matching-Game", icon: "web", link: "30-Assignment06-Matching-Game" },
				{ text: "20-Assignment 07: Server-side Quizzing System", icon: "php", link: "31-Assignment07-Server-side-Quizzing-System" },
				{ text: "21-Micro Assignment 07", icon: "php", link: "32-Micro-Assignment07" },
				{ text: "22-Micro Assignment 08", icon: "php", link: "33-Micro-Assignment08" },
				{ text: "34-Assignment 08", icon: "php", link: "34-Assignment-08-Interactive-Database" },
				{ text: "35-Assignment 09: Let's Chat", icon: "php", link: "35-Assignment09-Lets-Chat" },
				{ text: "36-Assignment 10: Node.js: Let's Chat", icon: "php", link: "36-Assignment10-Nodejs" },
			]
		},
		{
			text: "二、Java",
			icon: "java",
			collapsible: true,
			children: [
				"",
				{ text: "02-Part-1-Birth-Date-Application-30-pts", icon: "java", link: "02-Part-1-Birth-Date-Application-30-pts" },
				{ text: "03-Mac-Windows命令行编写Java", icon: "java", link: "03-Mac-Windows命令行编写Java" },
				{ text: "06-Weaving-a-Kilim-Carpet-Application", icon: "java", link: "06-Weaving-a-Kilim-Carpet-Application" },
				{ text: "07-Assignment-3-java", icon: "java", link: "07-Assignment-3-java" },
				{ text: "08-Assignment4-Hangman-Game", icon: "java", link: "10-Assignment4-Hangman-Game" },
				{ text: "09-Assignment3-Battleship", icon: "java", link: "12-Assignment3-Battleship" },
				{ text: "10-Assignment6", icon: "java", link: "14-Assignment6" },
				{ text: "11-group-hw", icon: "java", link: "15-group-hw" },
				// { text: "12-Postfix-Calculator", icon: "java", link: "25-Postfix-2Calculator" },
				// { text: "13-QueueAssignment", icon: "java", link: "28-QueueAssignment" },
			]
		},
		{
			text: "三、数据结构",
			icon: "shujujiegou-01",
			collapsible: true,
			children: [
				{ text: "01-Data-Structures-Programming-Assignment-1-OOP-Review", icon: "java", link: "18-Data-Structures-Programming-Assignment-1-OOP-Review" },
				{ text: "02-Postfix-2Calculator", icon: "java", link: "25-Postfix-2Calculator" },
				{ text: "03-QueueAssignment", icon: "java", link: "28-QueueAssignment" },

			]
		},
		{
			text: "四、数据分析/库",
			collapsible: true,
			icon: "mysql",
			prefix: "Database-Design-and-Implementation-Section001",
			children: [
				{ text: "01-schedule", icon: "icon_SQL", link: "01-schedule" },
				"02-Raw-Data-Munging",
				"03-Quiz",
				"03-spreadsheet",
				"04-SQL-CRUD",
				"05-Data-Normalization-and-Entity-Relationship-Diagramming",
				{ text: "05-Exam 1", icon: "icon_SQL", link: "05-Exam1" },
				{ text: "06-Exam 2", icon: "icon_SQL", link: "06-Exam2" },
				{ text: "07-AirBnB MongoDB Analysis", icon: "icon_SQL", link: "07-AirBnB-MongoDB-Analysis" },
				{ text: "08-pandas-exploration", icon: "icon_SQL", link: "08-pandas-exploration" },
				{
					text: "Notes",
					icon: "Notebook",
					prefix: "Notes",
					children: [
						"submit",
						{ text: "Course intro", icon: "a-bijibenbiji1", link: "Course-intro" },
					],
				},


			]
		},
		{
			text: "五、C 系统设置",
			icon: "c",
			collapsible: true,
			children: [

				{ text: "Assignment 1", icon: "a-bijibenbiji1", link: "37-C-Assignment1" },
				{ text: "Assignment 2", icon: "a-bijibenbiji1", link: "38-Programming-Assignment2" },
				{ text: "Assignment 3", icon: "a-bijibenbiji1", link: "39-ProgrammingAssignment3" },
				{ text: "Part1 Main Memory", icon: "a-bijibenbiji1", link: "40-Cache-Project-Part1-Main-Memory" },
				{ text: "Part2 Main Memory", icon: "a-bijibenbiji1", link: "41-Cache-Project-Part2-L2-Cache" },
				{ text: "Part3 Main Memory", icon: "a-bijibenbiji1", link: "42-Cache-Project-Part3-L1-Cache" },
			]
		},
		{
			text: "SQL",
			icon: "mysql",
			collapsible: true,
			// prefix: "",
			children: [
				"44-Homework1-sql",
				"45-Homework2-sql",
			]
		},
		{
			text: "Other",
			icon: "python",
			collapsible: true,
			// prefix: "",
			children: [
				"47-Fall-2024-Machine-Learning-Final-Competition-Guidelines",
				"46-CSCI-SHU360-Machine-Learning-Homework4",
				"50-Text-Post",
			]
		}
	],
	"/1v1/59-Chenxi-Huang/": "structure",
	"/1v1/71-YangZichen/": "structure",
	"/1v1/31-ZhangShuoteng/": [
		"",
		"01-assignment3",
	],
	"/1v1/11-MaLin": [
		"01-Java-Hw",
		"02-minproject",
		"03-Coursework-2-World-of-Zuul",
	],
	"/1v1/32-FYN/": [
		"",
		"01",
	],
	"/1v1/09-liujiahui": [
		{
			text: "Java",
			icon: "java",
			children: [
				"01-Coursework-1-Property-Viewer",
				"01-Coursework-1-Property-Viewer-zh",
				"02-Coursework-2-World-of-Zuul",
				"03-Coursework-2-World-of-Zuul-ZH",
				"04-CW1-2023-Brief",
			]
		}
	],
	"/1v1/08-LionGuo": [
		{
			text: "Python HW",
			icon: "python",
			children: [
				"01-Homework-Problem-DNA-sequencing",
				"02-Homework-Problem-2-Arctic-Ice",
				"03-Homework-Problem-3-Finding-an-exoplanet",
			]
		}
	],
	"/1v1/02-yuebao": [
		"",
		{
			text: "2022年",
			icon: "jihua2",
			collapsible: true,
			children: [
				"01-Plan",
			],
		}
	],
	"/1v1/05-Patrick/": [
		{
			text: "HomeWork",
			icon: "python",
			children: [
				"01-CITS1401-Computational-Thinking-with-Python",
				"02-CS-shaoshuai-Python-cs",
				"03-CITS1401-Computational-Thinking-wit-Python",
			]
		}
	],
	"/column/Java/": [
		{
			text: "第一章 Java 编程基础",
			collapsible: true,
			icon: "java",
			children: [
				"chapter01/01",
				"chapter01/02",
				"chapter01/03",
				"chapter01/04",
				"chapter01/05",
				"chapter01/06",
				"chapter01/07",
				"chapter01/08",
				"chapter01/09",
				"chapter01/10",
				"chapter01/11",
				"chapter01/12",
				"chapter01/13",
				"chapter01/14",
				"chapter01/15",
				"chapter01/16",
				"chapter01/17",
				"chapter01/18",
				"chapter01/19",
				"chapter01/20",
				"chapter01/21",
				"chapter01/22",
			],
		},
		{
			text: "第二章 Java面向对象编程",
			collapsible: true,
			icon: "java",
			children: [
				"chapter02/23",
				"chapter02/24",
				"chapter02/25",
				"chapter02/26",
				"chapter02/27",
				"chapter02/28",
				"chapter02/29",
				"chapter02/30",
				"chapter02/31",
				"chapter02/32",
				"chapter02/33",
				"chapter02/34",
				"chapter02/35",
				"chapter02/36",
				"chapter02/37",
				"chapter02/38",
				"chapter02/39",
				"chapter02/40",
				"chapter02/41",
				"chapter02/42",
			],
		},
		{
			text: "FQA",
			collapsible: true,
			icon: "java",
			children: [
				"FQA/01-Why-do-switch-case-statements-need-to-include-breaks",
				"FQA/02-Java-String-to-int-Translate",
				"FQA/03-for-generate-rhombus",
				"FQA/05-Java-trim()方法",
				"FQA/06-instance-object",
			]
		},
		{
			text: "补充",
			icon: "java",
			collapsible: true,
			children: [
				"supplement/01-Java-String-contains-Method",
				"supplement/02-Java-String-charAt-Method",
			],
		},
		{
			text: "Quiz",
			icon: "java",
			collapsible: true,
			children: [
				"Quiz/quiz01",
			],
		},
		{
			text: "Test",
			icon: "java",
			collapsible: true,
			prefix: "Test/",
			children: [
				{
					text: "题目",
					icon: "yongyan",
					children: [
						"test01",
					]
				},
				{
					text: "答案",
					icon: "kepujiaoyu",
					prefix: "Answer/",
					children: [
						"test01-answer",
					]
				}

			],
		},
		{
			text: "练习题",
			icon: "java",
			prefix: "practice",
			collapsible: true,
			children: [
				"01-Array-exercise"
			]
		}
	],
	"/column/tianchi/": [
		{
			text: "Python 入门与实践",
			icon: "python",
			collapsible: true,
			children: [
				"Python/Python01"
			],
		}
	],
	"/1v1/25-Cynthia/": [
		{ text: "01-变量", icon: "python", link: "01.md" },
		{ text: "02-初识数据类型", icon: "python", link: "02.md" },
		{ text: "03-数字型", icon: "python", link: "03.md" },
	],
	"/1v1/19-zhaojinwei/": [
		"",
		"01",
		"02",
		"03",
	],
	"/1v1/10-java-note/": [
		{
			text: "第一章 Java编程基础 (30讲)",
			icon: "java",
			children: [
				"01"
			]

		}
	],
	"/1v1/17-R/": [
		"",
		"01",
	],
	"/1v1/01-Thomas-hw-note/": [
		{
			text: "搭建个人博客",
			collapsible: true,
			children: [
				"02-Cocos",
				"03-web02",
				"04-web03",
				"05-web04",
				"06-web05",
				"07-web06",
				"08-web07",
				"09-web08",
				"10-web09",
				"11-web10",
				"12-web11",
			]
		},
		{
			text: "Python 基础",
			collapsible: true,
			children: [
				"01-Variable",
				{ text: "02-初识数据类型", icon: "python", link: "13-Python01" },
				{ text: "14-第二节-初识数据类型", icon: "python", link: "14-第二节-初识数据类型" },
				{ text: "15-数字型", icon: "python", link: "15-数字型" },
				{ text: "16-字符串", icon: "python", link: "16-python-string" },

			]
		}
	],
	"/column/python60/": [
		{ text: "Day 1", icon: "python", link: "01" },
		{ text: "Day 2", icon: "python", link: "02" },
		{ text: "Day 3", icon: "python", link: "03" },
		{ text: "Day 4", icon: "python", link: "04" },
		{ text: "Day 5", icon: "python", link: "05" },
		{ text: "Day 6", icon: "python", link: "06" },
		{ text: "Day 7", icon: "python", link: "07" },
		{ text: "Day 8", icon: "python", link: "08" },
		{ text: "Day 9", icon: "python", link: "09" },
		{ text: "Day 10", icon: "python", link: "10" },
		{ text: "Day 11", icon: "python", link: "11" },
	],
	"/archives/": "structure",
	// "/blog/crawler/": "structure",
	// "/blog/2022/": "structure",
	"/column/data_analysis": [
		{
			text: "pyecharts",
			collapsible: true,
			children: [
				"pyecharts/01",
				"pyecharts/02",
			]
		},
		{
			text: "FAQ",
			collapsible: true,
			children: [
				"FAQ/01-Excel中$.md",
				"FAQ/02"
			]
		},
		{
			text: "Math Base",
			collapsible: true,
			children: [
				{ text: "01-平均差", icon: "zhuzhuangtu", link: "Math/01-mean-deviation" },
				{ text: "02-标准差和方差", icon: "zhuzhuangtu", link: "Math/02-standard-deviation" }

			]
		},
		{
			text: "数据分析45讲",
			collapsible: true,
			children: [
				{
					text: "Introduction (Lecture 1)",
					children: [
						"Data-analysis-practice-45-lectures/Phase-one/01",
					]
				},
				{
					text: "Module 2: Data Analysis Algorithms (20 lectures)",
					children: [
						"Data-analysis-practice-45-lectures/Phase-three/01",
						"Data-analysis-practice-45-lectures/Phase-three/02",
						"Data-analysis-practice-45-lectures/Phase-three/03",
						"Data-analysis-practice-45-lectures/Phase-three/04-1",
						"Data-analysis-practice-45-lectures/Phase-three/04-2",
						"Data-analysis-practice-45-lectures/Phase-three/17",
						"Data-analysis-practice-45-lectures/Phase-three/18",
						"Data-analysis-practice-45-lectures/Phase-three/24",
						"Data-analysis-practice-45-lectures/Phase-three/25",
					]
				}

			]
		},
		{
			text: "补充",
			collapsible: true,
			children: [
				"supplement/01-最近邻算法KNN",
			]
		}
	],
	// "/learning_web/": [
	// 	"",
	// 	"01",
	// ],
	"/column/data-structure/": [
		{
			// text: "阶段一：算法与数据结构基础",
			text: "算法与数据结构基础",
			icon: "employee-rank",
			collapsible: true,
			children: [
				{
					text: "第1周 线性查找法",
					icon: "shujujiegou",
					// collapsible: true,
					children: [
						{
							text: "第1章 欢迎大家来到算法与数据结构的世界",
							children: [
								"week1/01",
								"week1/02",
							]
						}
					]
				}
			]
		},
		{
			text: "数据结构与算法之美",
			icon: "laboratorylab",
			collapsible: true,
			children: [
				{
					text: "开篇词",
					icon: "shujujiegou",
					prefix: "The-beauty-of-data-structures-and-algorithms/",
					// collapsible: true,
					children: [
						{ text: "开篇词", icon: "shujujiegou-01", link: "00-开篇词-从今天起-跨过数据结构与算法这道坎" }
					]
				},
				{
					text: "入门篇",
					icon: "shujujiegou",
					prefix: "The-beauty-of-data-structures-and-algorithms/",
					// collapsible: true,
					children: [
						{ text: "01-数据结构和算法？", icon: "shujujiegou-01", link: "01-为什么要学习数据结构和算法" },
						{ text: "02-高效地学习", icon: "shujujiegou-01", link: "02-如何抓住重点，系统高效地学习数据结构与算法？" },
						{ text: "03-复杂度分析（上）", icon: "shujujiegou-01", link: "03-复杂度分析（上）：如何分析、统计算法的执行效率和资源消耗？" },
						{ text: "04-复杂度分析（下）", icon: "shujujiegou-01", link: "04-复杂度分析（下）：浅析最好、最坏、平均、均摊时间复杂度" },

					]
				},
				{
					text: "基础篇",
					icon: "shujujiegou",
					prefix: "The-beauty-of-data-structures-and-algorithms/",
					// collapsible: true,
					children: [
						{ text: "05-为什么数组从0开始编号?", icon: "shujujiegou-01", link: "05-数组：为什么很多编程语言中数组都从0开始编号？" },
						{ text: "06-链表「上」", icon: "shujujiegou-01", link: "06-链表（上）：如何实现LRU缓存淘汰算法？" },
						{ text: "07-链表「下」", icon: "shujujiegou-01", link: "07-链表（下）：如何轻松写出正确的链表代码？" },
						{ text: "08-栈", icon: "shujujiegou-01", link: "08-栈：如何实现浏览器的前进和后退功能？" },
						{ text: "09-队列", icon: "shujujiegou-01", link: "09-队列：队列在线程池等有限资源池中的应用" },
						{ text: "10-递归：找到“最终推荐人”", icon: "shujujiegou-01", link: "10-递归：如何用三行代码找到“最终推荐人”？" },
						{ text: "21-哈希算法（上）", icon: "shujujiegou-01", link: "21-哈希算法上-如何防止数据库中的用户信息被脱库？" },
					]
				}
			]
		},
		{
			text: "Tips",
			collapsible: true,
			icon: "shequ-jihuo",
			prefix: "Tips",
			children: [
				"01-Climbing-the-Stairs",
				"02-Java-Stack",
				"03-binarysearch-to-log2n",
			]
		},
		{
			text: "supplement",
			collapsible: true,
			icon: "alisis",
			prefix: "supplement",
			children: [
				"big-O-proof-and-big-Θproof",
			]
		},
		{
			text: "MakerYue",
			collapsible: true,
			icon: "worksheet",
			prefix: "MakerYue",
			children: [
				"week1-python-basics-and-linked-lists",
				"week1-solution",
				"week2-linked-lists-abstract-data-types",
				"Week3-Asymptotic-analysis-1",
			]
		},
		{
			text: "Algorithm General",
			collapsible: true,
			icon: "zhuanjiaketang-jihuo",
			prefix: "Algorithm-General-16",
			children: [
				"00-Era-of-Human-Machine-Interaction-Understanding-Algorithms-for-Success",
			]
		},
		{
			text: "Python 算法",
			icon: "python",
			prefix: "Python-DSA",
			collapsible: true,
			children: [
				"00-chapter-computational-complexity",
				"01-bogosort-sorting-algorithms",
				"02-Insertion-Sort",
				"03-linear-search",
				"04-binary-tree",
				"05-Prims-algorithm",
				"06-Kruskal-algorithm",
				"07-hash_map",
			]
		}


	],
	"/column/AI-practice-class-for-front-end-engineers/": [
		"01"
	],
	"/1v1/95-Diotai/": "structure",
	"/1v1/94-Gregre_/": "structure",
	"/1v1/51-YeDanning/": "structure",
	"/1v1/92-lztc1751/": "structure",
	"/column/TensorFlow/零基础实战机器学习/": [
		{
			text: "开篇词 (1讲)",
			collapsible: true,
			children: [
				""
			]
		},
		{
			text: "准备篇 (4讲)",
			collapsible: true,
			children: [
				"01",
				"02",
				"03",
			]
		}
	],
	"/column/Programmingthinking/": "structure",
	"/dedao/01-Xue-Zhaofengs-economics-class/": [
		{
			text: "课前必读(1讲)",
			collapsible: true,
			children: [
				"",
				"01",
			]
		}
	],
	"/column/Fifth_brother_photography_class/": [
		"",
	],
	"/Code1v1/": [
		"",
		{
			text: "chapter1",
			icon: "python",
			collapsible: true,
			children: [

			]
		},
		"changelog",
		"Development-plan"
		// {
		// 	text: "Changelog",
		// 	icon: "time",
		// 	// collapsible: true,
		// 	children: [
		// 		"changelog",
		// 	]
		// },

	],
	"/column/PPT/": [
		"note",
		{
			text: "卷一:零基础学习 PPT",
			collapsible: true,
			children: [
				"",
				"01",
			]
		},
		{
			text: "卷二:PPT 改丑计划",
			collapsible: true,
			children: [
				""
			]
		},
	],
	"/posts/": "structure",
	// "/posts/html": "structure",
	// "/Open_up_your_pattern/": [
	// 	"01",
	// 	"02"
	// ],
	"/Open_up_your_pattern/": "structure",
	"/column/web/": [
		"catalogue",
		{
			text: "Web 前端入门扫盲课程",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				{
					text: "第一章 Web 概述",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/",
						"base/base_01",
						"base/base_02",
					],
				},
				{
					text: "第二章 HTML 入门",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/base_03",
						"base/base_04",
						"base/base_05",
						"base/base_06",
					]
				},
				{
					text: "第三章 CSS 入门",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/base_07",
						"base/base_08",
						"base/base_09",
					]
				},
				{
					text: "第四章 JavaScript 入门",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/base_10",
						"base/base_11",
						"base/base_12",
					]
				}
			],
		},
		{
			text: "前端工程师2022版",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				{
					text: "阶段一：前端基础入门",
					icon: "24gl-folderOpen",
					collapsible: true,
					children: [
						{
							text: "第1周: HTML5 基础语法与标签",
							icon: "network",
							// collapsible: true,
							children: [
								{
									text: "前置引导课（课前必看）",
									// collapsible: true,
									children: [
										{
											text: "第1章 课程简介",
											icon: "Web",
											children: [
												"txk/week1/txk_01",
												"txk/week1/txk_02",
												"txk/week1/txk_03",
											]
										},
										{
											text: "第2章 前端开发行情与课程体系介绍",
											icon: "Web",
											// collapsable: true,
											children: [
												"txk/week1/txk_04",
												"txk/week1/txk_05",
												"txk/week1/txk_06",
												"txk/week1/txk_07",
												"txk/week1/txk_08",
											]
										},
										{
											text: "第3章 开发工具和环境准备",
											icon: "Web",
											children: [
												"txk/week1/txk_09",
												"txk/week1/txk_10",
												"txk/week1/txk_11",
											]
										},
										{
											text: "第4章 课程总结",
											icon: "Web",
											children: [
												"txk/week1/txk_12",
											],
										},
									]
								},
								{
									text: "HTML5语法与基础标签",
									// collapsible: true,
									children: [
										{
											text: "第1章 课程简介",
											icon: "Web",
											children: [
												"txk/week1/txk_13",
											],
										},
										{
											text: "第2章 认识互联网「了解即可」",
											icon: "Web",
											children: [
												"txk/week1/txk_14",
											],
										},
										{
											text: "第3章 基础语法与特性",
											icon: "Web",
											children: [
												"txk/week1/txk_15",
												"txk/week1/txk_16",
												"txk/week1/txk_17",
												"txk/week1/txk_18",
												"txk/week1/txk_19",
											],
										},

									]
								},

							]
						},

					]
				}
			]
		},
		{
			text: "电子教辅",
			collapsible: true,
			children: [
				"book/html-01",
			]
		},
		{
			text: "FAQ",
			collapsible: true,
			children: [
				"FAQ/01-HTML图片并排显示",
				"FAQ/02-footer",
			]
		}
	],
	"/1v1/81-guizhiyi/": "structure",

	"/1v1/87-Final-assignment/": "structure",

	"/column/easy_sql/": [
		"",
		{
			text: "老司机带你轻松玩转 SQL",
			collapsible: true,
			children: [
				{
					text: "第1章:基础教程",
					icon: "jiediansql",
					collapsible: true,
					children: [
						"old-hand/01-Is-it-necessary-to-learn-SQL-at-this-time",
						"old-hand/02-Understand-the-relationship-between-databases-and-the-SQL-language",
						"old-hand/03-Preliminary-study-of-database-The-use-of-simple-query-statements",
					]

				},
			]
		},
		{
			text: "SQL/MySQL 零基础从入门到精通",
			collapsible: true,
			children: [
				{
					text: "第1节:Introduction and Installation",
					icon: "jiediansql",
					collapsible: true,
					children: [
						"Easy-Sql-Mysql/第1节-Introduction-and-Installation/01-What-Database",
						"Easy-Sql-Mysql/第1节-Introduction-and-Installation/02-sql-and-nosql",
					]
				}
			],
		},
		{
			text: "SQL",
			collapsible: true,
			prefix: "SQL",
			children: [
				"00-sql-tutorial",
				"01-sql-intro",
			],
		},
		{
			text: "SQL 体系课",
			collapsible: true,
			icon: "mysql",
			prefix: "Systematic-course",
			children: [
				"01-why-database",
			],
		},
		{
			text: "SQL Tips",
			icon: "mysql",
			collapsible: true,
			prefix: "Tips",
			children: [
				"01-ER",
			]
		},
	],
	"/column/photography/": [
		{
			text: "器材基础Plus",
			collapsible: true,
			children: [
				{
					text: "学前班",
					// collapsable: true,
					children: [
						"",
						"01",
						"02",
						"03",
						"04",
						"05",
						"06",
					]
				}
			]
		}

	],
	"/column/pdf/": [
		{
			text: "IT类",
			collapsible: true,
			children: [
				"",
			],
		}
	],
	"/column/tijie/": [
		"",
		{
			text: "牛客网",
			collapsible: true,
			children: [
				{
					text: "华为机试",
					// collapsable: true,
					children: [
						"nkw_hw01",
						"nkw_hw02",
						"nkw_hw03",
						"nkw_hw04",
					]
				}
			]
		},
		{
			text: "一本通",
			collapsible: true,
			children: [
				{
					text: "Python语言入门",
					icon: "python",
					// collapsible: true,
					children: [
						"ybt_py19",
					],
				},
				{
					text: "顺序结构",
					icon: "python",
					// collapsible: true,
					children: [
						"ybt_py01",
						"ybt_py02",
						"ybt_py18",
					],
				},
				{
					text: "控制结构",
					icon: "python",
					// collapsible: true,
					children: [
						"ybt_py03",
						"ybt_py04",
						"ybt_py06",
						"ybt_py08",
						"ybt_py09",
						"ybt_py10",
					],
				},
				{
					text: "循环结构",
					icon: "python",
					// collapsible: true,
					children: [
						"ybt_py05",
						"ybt_py07",
						"ybt_py11",
						"ybt_py12",
						"ybt_py13",
						"ybt_py14",
						"ybt_py15",
						"ybt_py16",
						"ybt_py17",
					],
				},
				// "ybt_py20",
				// "ybt_py21",
				// "ybt_py22",
				// "ybt_py23",
				// "ybt_py24",
				// "ybt_py25",
			],
		},
		{
			text: "字节跳动",
			collapsible: true,
			children: [
				"bytedance",
				{
					text: "字节跳动技术习题第一期(上)",
					collapsible: true,
					icon: "python",
					children: [
						"bytedance/01",
						"bytedance/02",
						"bytedance/03",
						"bytedance/04",
						"bytedance/05",
						"bytedance/06",
						"bytedance/07",
						"bytedance/08",
						"bytedance/09",
						"bytedance/10",
					]
				},
				{
					text: "字节跳动技术习题第一期(上)",
					collapsible: true,
					icon: "python",
					children: [
						"bytedance/11",
						"bytedance/12",
						"bytedance/13",
						"bytedance/14",
						"bytedance/15",
						"bytedance/16",
						"bytedance/17",
						"bytedance/18",
						"bytedance/19",
						"bytedance/20",
					]
				}
			]
		},
		{
			text: "中山大学",
			collapsible: true,
			children: [
				"sysu",
				{
					text: "「Python」基础2022级",
					collapsible: true,
					icon: "python",
					children: [
						"sysu/01",
						"sysu/02",
						"sysu/03",
						"sysu/04",
						"sysu/05",
					]
				}
			]
		},
		{
			text: "纽约大学",
			icon: "python",
			collapsible: true,
			prefix: "nyu",
			children: [
				"01",
			]
		},
	],
	"/1v1/50-STomp/": "structure",

	"/column/cookdinner/": "structure",
	"/1v1/80-Qingfeng/": "structure",
	"/column/pyauto/gkk/": [
		"",
		// { text: "公众号", link: "01"},
	],
	"/column/pyauto/": [
		"",
		{
			text: "卷一:办公自动化 BASE",
			collapsible: true,
			children: [
				{
					text: "一、 Python 自动化办公",
					children: [
						"auto_base01",
						"auto_base02",
					],
				},
				{
					text: "二、Python 环境安装",
					children: [
						"auto_base03",
						"auto_base04",
					],
				},
				{
					text: "三、Python 自动化处理 Excel",
					children: [
						"auto_base05",
						"auto_base06",
						"auto_base07",
						"auto_base08",
						"auto_base09",
						"auto_base10",
						"auto_base11",
						"auto_base12",
						"auto_base13",
					],
				}

			],
		},
		{
			text: "卷二:课前准备",
			collapsible: true,
			children: [
				"auto_01",
				"auto_02",
			],
		}
	],
	"/1v1/101-Sallymisty/": "structure",
	"/column/tkinter/": [
		{
			text: "FQA",
			// 可选的, 设置分组是否可以折叠，默认值是 false,
			collapsible: true,
			//   link: "https://bornforthis.cn/onepython.html",
			children: [
				"tearoff",
			]
		},],
	"/column/md/": [
		"",
		{
			// 必要的，分组的标题文字
			text: "Markdown 快速入门教程",
			// 可选的, 分组标题对应的图标
			icon: "creative",
			// 可选的, 分组标题对应的链接
			link: "/column/md/",
			// 可选的, 设置分组是否可以折叠，默认值是 false,
			collapsible: true,
			// 必要的，分组的子项目
			children: [
				"01",
				"02",
				"03",
			],
		},],
	"/1v1/83-LuXingjiu/": "structure",
	"/1v1/84-Z/": "structure",
	"/column/数据分析思维与实战23讲/": "structure",
	"/Books/": [
		{ text: "目录", icon: "book", link: "README.md" },
		// "",
		{
			text: "01-本书纠错",
			icon: "book",
			collapsible: true,
			prefix: "01-BookCorrectsErrors/",
			children: "structure",
		},
		{
			text: "02-补充文章",
			icon: "book",
			collapsible: true,
			prefix: "02-SupplementaryArticles/",
			children: [
				{
					text: "01-编程思维",
					icon: "read",
					prefix: "Thinking/",
					collapsible: true,
					children: [
						{ text: "01-计算机“当教授？”", icon: "read", link: "01-Can-computers-be-university-professors" },
						"02-Are-war-robots-reliable",
						{ text: "03-你真的安全吗？", icon: "read", link: "03-How-did-hackers-steal-your-lucky-money" },
						{ text: "04-自动驾驶，还在路上", icon: "read", link: "04-Why-havent-self-driving-cars-become-widespread-yet" },
						{ text: "05-机器能叛变吗？", icon: "read", link: "05-All-artificial-intelligence-turns-out-to-be-very-weak" },
					],
				},
				{
					text: "02-Python 编程",
					prefix: "Python/",
					icon: "python",
					collapsible: true,
					children: "structure",
				},
				{
					text: "03-Share",
					prefix: "Share/",
					icon: "blog",
					collapsible: true,
					children: "structure",
				}
			],
		},
		{
			text: "03-本书练习",
			icon: "book",
			collapsible: true,
			prefix: "03-TargetedPractice/",
			children: "structure",
		},
		{
			text: "04-本书资源",
			icon: "book",
			collapsible: true,
			prefix: "04-BookResources/",
			children: "structure",
		},
		{
			text: "05-与出版社沟通",
			icon: "book",
			collapsible: true,
			prefix: "05-Liaising-with-the-publisher/",
			children: "structure",
		},
		{
			text: "06-出版宣讲",
			icon: "book",
			collapsible: true,
			prefix: "06-publishing-and-speaking/",
			children: "structure",
		},
		{
			text: "07-CodeMark 学习系统",
			icon: "book",
			collapsible: true,
			prefix: "07-CodeMark/",
			children: "structure",
		}
	],
	"/1v1/100-Leo/": "structure",
	"/column/Python-Programming-Course/": [
		"Preface",
		{ text: "Python 课程表", icon: "python", link: "ClassSchedule" },
		{
			text: "卷一：编程思维",
			prefix: "P01-Programming-thinking",
			icon: "readingandwritingabookwithinkandafeather",
			collapsible: true,
			// children: "structure",
			children: [
				{
					text: "第一章｜何为编程思维？",
					icon: "blog",
					collapsible: true,
					children: [
						"01-Why-learn-to-program",
						"02-Programming-thinking-makes-kids-smarter",
					],
				},
				{
					text: "第二章｜最简单的编程史",
					icon: "blog",
					collapsible: true,
					children: [
						"03-People-started-programming-over-800-years-ago",
						"04-Why-is-the-Father-of-the-Computer-a-fraud",
						"05-How-could-the-Father-of-artificial-Intelligence-end-war",
					],
				},
				{
					text: "第三章｜编程思维，教你思考",
					icon: "blog",
					collapsible: true,
					children: [
						"06-How-can-mobile-phones-give-us-beauty",
						"07-How-do-you-teach-a-computer-to-recognize-a-puppy",
						"08-You-can-measure-the-height-of-a-pyramid-by-looking-at-its-shadow",
						"09-Computers-dont-even-know-the-number-2",
						"10-How-does-a-computer-analyze-a-problem",
						"11-Can-Siri-understand-you",
						"12-Computers-can-learn-by-themselves",
						"13-How-to-catch-a-robot-spy-with-programming-thinking",
						"14-How-do-you-prove-youre-not-a-robot",
						"15-Man-vs-machine-man-loses-the-first-battle",
						"16-Man-machine-war-the-computer-steal-the-trick",
						"17-Why-dont-the-waiters-in-the-restaurant-cook",
					],
				},
				{
					text: "第四章｜用算法，解决生活难题",
					icon: "blog",
					collapsible: true,
					children: [
						"18-How-to-calculate-PI-with-a-handful-of-rice",
						"19-How-to-make-a-parallel-computing-scrambled-egg-dish",
						"20-How-to-choose-the-class-monitor-in-the-fairest-way",
						"21-Will-the-world-come-to-an-end-in-2038",
						"22-Can-computer-programs-really-kill-people",
						"23-Who-exactly-is-the-author-of-Dream-of-the-Red-Chamber",
						"24-Little-ants-can-also-write-algorithms",
						"25-How-to-build-cars-with-the-idea-of-establishing-archives",
						"26-Who-knows-you-best-Search",
						"27-Who-knows-you-best-Recommended",
					],
				},
				{
					text: "第五章｜人工智能未来",
					icon: "blog",
					collapsible: true,
					children: [
						"28-Can-computers-be-university-professors",
						"29-Are-war-robots-reliable",
						"30-How-did-hackers-steal-your-lucky-money",
						"31-Why-havent-self-driving-cars-become-widespread-yet",
						"32-All-artificial-intelligence-turns-out-to-be-very-weak"
					],
				},
			]
		},
		{
			text: "卷二：Python 小咖养成",
			icon: "readingandwritingabookwithinkandafeather",
			// prefix: "NoteBook/",
			collapsible: true,
			children: [
				"P02-1-Python-Starter-Journey/00-Newproject",
				{
					text: "第一章 变量和数据类型",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨变量", icon: "yongyan", link: "P02-1-Python-Starter-Journey/01-Variable" },
						{ text: "第二节丨初识数据类型", icon: "yongyan", link: "P02-1-Python-Starter-Journey/02-Introduction-to-Data-Types" },
						{ text: "第三节丨章节测试一", icon: "yongyan", link: "P02-2-basequestion/q1" },
						{ text: "第四节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer1" },

					]
				},
				{
					text: "第二章 数据类型（上）",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨数值", icon: "yongyan", link: "P02-1-Python-Starter-Journey/03-Numeric-type" },
						{ text: "第二节丨字符串", icon: "yongyan", link: "P02-1-Python-Starter-Journey/04-python-string" },
						{ text: "作业一丨问答式简历", icon: "yongyan", link: "P02-2-basequestion/hw1" },
						{ text: "第三节丨章节测试二", icon: "yongyan", link: "P02-2-basequestion/q2" },
						{ text: "第四节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer2" },
						{ text: "第五节丨何为迭代？", icon: "yongyan", link: "P02-1-Python-Starter-Journey/05-0-iterable" },
					]
				},
				{
					text: "第三章 数据类型（中）",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨列表", icon: "yongyan", link: "P02-1-Python-Starter-Journey/05-python-list" },
						{ text: "第二节丨元组", icon: "yongyan", link: "P02-1-Python-Starter-Journey/06-python-tuple" },
						{ text: "第三节丨章节测试三", icon: "yongyan", link: "P02-2-basequestion/q3" },
						{ text: "第四节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer3" },
					]
				},
				{
					text: "第四章 数据类型（下）",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨字典", icon: "yongyan", link: "P02-1-Python-Starter-Journey/07-python-dict" },
						{ text: "第二节丨集合", icon: "yongyan", link: "P02-1-Python-Starter-Journey/08-python-set" },
						{ text: "第三节丨章节测试四", icon: "yongyan", link: "P02-2-basequestion/q4" },
						{ text: "第四节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer4" },
					]
				},
				{
					text: "第五章 if 条件判断",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨布尔表达式", icon: "yongyan", link: "P02-1-Python-Starter-Journey/09-python-bool" },
						{ text: "第二节丨if 条件判断", icon: "yongyan", link: "P02-1-Python-Starter-Journey/10-python-if" },
						{ text: "第三节丨章节测试五", icon: "yongyan", link: "P02-2-basequestion/q5" },
						{ text: "第四节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer5" },
					]
				},
				{
					text: "第六章 while 循环",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨while 循环", icon: "yongyan", link: "P02-1-Python-Starter-Journey/11-python-while" },
						{ text: "第二节丨章节测试六", icon: "yongyan", link: "P02-2-basequestion/q6" },
						{ text: "第三节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer6" },
					]
				},
				{
					text: "第七章 for 循环",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨for 循环", icon: "yongyan", link: "P02-1-Python-Starter-Journey/12-python-for" },
						{ text: "作业二丨运势预测软件", icon: "yongyan", link: "P02-2-basequestion/hw2" },
						{ text: "第二节丨章节测试七", icon: "yongyan", link: "P02-2-basequestion/q7" },
						{ text: "第三节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer7" },
					]
				},
				{
					text: "第八章 函数",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨函数", icon: "yongyan", link: "P02-1-Python-Starter-Journey/13-function" },
						{ text: "第二节丨章节测试八", icon: "yongyan", link: "P02-2-basequestion/q8" },
						{ text: "第三节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer8" },
					]
				},
				{
					text: "第九章 类",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨面向对象", icon: "yongyan", link: "P02-1-Python-Starter-Journey/14-class" },
						{ text: "第二节丨章节测试九", icon: "yongyan", link: "P02-2-basequestion/q9" },
						{ text: "第三节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer9" },
						{ text: "项目作业丨对话式对战游戏设计", icon: "yongyan", link: "P02-2-basequestion/hw_word_game" },
					]
				},
				{
					text: "第十章 文件操作",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨文件操作", icon: "yongyan", link: "P02-1-Python-Starter-Journey/15-python-file-operation" },
					]
				},
				{
					text: "第十一章 错误与异常",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨错误与异常", icon: "yongyan", link: "P02-1-Python-Starter-Journey/16-python3-errors-and-exceptions" },
					]
				},
				{
					text: "第十*章 结业测试",
					icon: "python",
					collapsible: true,
					children: [
						{ text: "第一节丨结业测试", icon: "yongyan", link: "P02-2-basequestion/q10" },
						{ text: "第二节丨答案", icon: "answer_font", link: "P02-2-basequestion/answer10" },
					]
				},
				{
					text: "Other",
					icon: "python",
					collapsible: true,
					children: [
						"P02-1-Python-Starter-Journey/00-TODO-LIST",
						"P02-1-Python-Starter-Journey/All",
						"P02-1-Python-Starter-Journey/Practice",
					]
				},
			]
		},
		{
			text: "卷三：Assignment",
			icon: "assignment",
			prefix: "P03-Assignment/",
			collapsible: true,
			children: "structure",
			// [
			// 	"Assignment1",
			// 	"Assignment1-Solution",
			// 	"Assignment2",
			// 	"Assignment2-Solution",
			// 	"Assignment3",
			// 	"01-File-IO-and-CSV-Files",
			// ]
		},
		{
			text: "卷四：Projects",
			icon: "shequ-jihuo",
			prefix: "P04-Projects/",
			collapsible: true,
			children: "structure",
		},
		{
			text: "卷五：AI大模型初体验",
			icon: "rengongzhineng",
			prefix: "P05-AI-large-model/",
			collapsible: true,
			children: "structure",
		},
		{
			text: "卷六：数据分析",
			icon: "zhuzhuangtu",
			collapsible: true,
			prefix: "P06-data_analysis/",
			children: [
				{
					text: "P01：数据思维课「前置」",
					icon: "laboratorylab",
					collapsible: true,
					prefix: "P06-0-0-Basic-Data-Thinking-Course/",
					children: "structure"
				},
				{
					text: "P02：数据思维课「核心」",
					icon: "laboratorylab",
					collapsible: true,
					prefix: "P06-1-data-analysis-thinking-course/",
					children: "structure"
				},
				{
					text: "P03：数据分析体系课",
					// text: "阶段一：快速掌握数据分析必备技能",
					icon: "laboratorylab",  // laboratorylab // yongyan
					collapsible: true,
					children: [
						{
							text: "第1周 走进数据分析",
							collapsible: true,
							icon: "laboratorylab",
							children: [
								"Week1",
								"Week4"
							]
						},
					]
				},
			]
		},
		{
			// text: "卷六：如何成为有效学习的高手",
			text: "卷七:成为有效学习的高手",
			prefix: "P07-How-to-become-an-expert-in-effective-learning/",
			icon: "zhuanjiaketang-jihuo",
			collapsible: true,
			children: "structure",
		},
		{
			// text: "卷七：有效训练你的研究能力",
			text: "卷八:有效训练研究能力",
			prefix: "P08-research-ability/",
			icon: "siwei1", // zhuanjiaketang-jihuo
			collapsible: true,
			children: "structure",
		},
		{
			text: "卷九：FQA",
			prefix: "P09-FAQ/",
			icon: "fankuifaqs",
			collapsible: true,
			children: "structure",
		},
		{
			text: "卷十：Share",
			prefix: "P10-Share/",
			icon: "share1",
			collapsible: true,
			children: [
				{
					text: "知识卡片·笔记",
					icon: "card",
					// collapsible: true,
					prefix: "Card/",
					children: [
						{ text: "01-变量知识卡片", icon: "yongyan", link: "01-Variable" },
					],
				},
				{
					text: "有趣的项目",
					icon: "youqu",
					// collapsible: true,
					prefix: "Interesting-project/",
					children: "structure",
				},
				{
					text: "想法💡",
					icon: "idea",
					prefix: "Idea/",
					children: "structure",
				},
			]

		},
		{
			text: "卷十一：Regex 学习",
			prefix: "P11-regex-intro-course/",
			icon: "regex",
			collapsible: true,
			children: "structure",

		},
		{
			text: "卷十二：大模型安全实战课",
			prefix: "P12-llm-security-hands-on-course/",
			icon: "anquan",
			collapsible: true,
			children: "structure",

		},
		{
			text: "卷十三：个人博客搭建",
			prefix: "P13-personal-blog-building/",
			icon: "web",
			collapsible: true,
			children: [
				{ text: "01-Waline 评论搭建", icon: "blog", link: "01-waline-server" },
				{ text: "02-搭建属于自己的平台", icon: "blog", link: "02-Blog-build" },
			],

		},
		{
			text: "卷十四：Claude Code 工程化实战",
			prefix: "P14-claude-code-engineering-practice/",
			icon: "claude1",
			collapsible: true,
			children: "structure",

		},
		{
			text: "卷十五：OpenClaw 项目实战",
			prefix: "P15-OpenClaw/",
			icon: "longxia2",
			collapsible: true,
			children: [
				{
					text: "OpenClaw 系统实战",
					icon: "longxia2",
					collapsible: true,
					prefix: "openclaw-core-principles-practice/",
					children: [
						"",
					],
				},
				{ text: "01-OpenClaw 安装", icon: "longxia2", link: "01-install-step" },
				{ text: "02-OpenClaw 是什么", icon: "longxia2", link: "01-openclaw-what-is" },
				{ text: "03-OpenClaw WSL", icon: "longxia2", link: "02-openclaw-wsl-install" },
				{ text: "04-OpenClaw 部署", icon: "longxia2", link: "03-OpenClaw-step-up" },
				{ text: "05-玩转 Skills", icon: "longxia2", link: "04-OpenClaw-Skills" },
				{ text: "06-FAQ", icon: "longxia2", link: "05-OpenClaw-FAQ" },
				{ text: "07-OpenClaw 案例", icon: "longxia2", link: "06-openclaw-case-studies" },
				{ text: "08-飞书插件教程", icon: "longxia2", link: "07-openclaw-lark-tools" },
				{ text: "09-OpenClaw 制作客服", icon: "longxia2", link: "08-openclaw-ecommerce-customer-service" },
				{ text: "10-OpenClaw可以让大厂收手么？", icon: "longxia2", link: "09-openclaw-update-shell-crisis" },
				{ text: "11-OpenClaw 对接钉钉「待定」", icon: "longxia2", link: "10-openclaw-dingtalk-integration" },
				{ text: "12-给几个付费粉丝安装 OpenClaw 后的一些心得", icon: "longxia2", link: "11-OpenClaw-Think" },
				{ text: "13-为什么龙虾不成熟仍要先用起来？", icon: "longxia2", link: "12-why-use-lobster-before-it-is-mature" },
				{ text: "14-智牛 API 邀请测评", icon: "longxia2", link: "13-niuapi-test" },
			],

		},
		{
			text: "卷十六：AI绘画实战",
			prefix: "P16-ai-drawing-core-tech-and-practice/",
			icon: "AIhuatu1",
			collapsible: true,
			children: "structure",

		},
		{
			text: "卷十七：零门槛 AI 做影篇",
			prefix: "P17-ai-course-resources/",
			icon: "workingDirectory",
			collapsible: true,
			children: "structure",

		},
		{
			text: "卷十八：Codex 实战",
			prefix: "P18-Codex/",
			icon: "damoxing",
			collapsible: true,
			children: "structure",

		},

		{
			text: "专项练习",
			prefix: "P02-2-basequestion/",
			icon: "a-jibijilianxibianji",
			collapsible: true,
			children: [
				"special_variabl",
				"special_yunsuanfu",
				"special_for",
				"special_while",
				"special_list",
				"special_function",
				"special_class",
			],
		},
		{
			text: "技巧点拨",
			prefix: "P02-2-basequestion/",
			icon: "idea",
			collapsible: true,
			children: [
				"skill_pycharm1",
				"skill_ipython1",
			],
		},
		{
			text: "补充知识",
			prefix: "P02-2-basequestion/",
			icon: "siwei1",
			collapsible: true,
			children: [
				"requirements",
				"radix_point",
				"format"
			],
		},
		{
			text: "CS-PY101 Lab",
			icon: "a-jibijilianxibianji",
			collapsible: true,
			prefix: "Lab",
			children: [
				{ text: "CS-PY101 Lab 1", icon: "employee-rank", link: "Lab01" },
				{ text: "CS-PY101 Lab 2", icon: "employee-rank", link: "Lab02" },
				{ text: "CS-PY101 Lab 3", icon: "employee-rank", link: "Lab03" },

			],
		},
		{
			text: "CS_PY101 Lab Solution",
			icon: "laboratorylab",
			prefix: "Lab-Solution",
			collapsible: true,
			children: [
				"Lab01-Solution",
				"Lab02-Solution",
			]
		},
		{
			text: "Python_tutorial",
			icon: "python",
			prefix: "Python_tutorial/",
			collapsible: true,
			children: [
				// "",
				{
					text: "Python 基础",
					collapsible: true,
					children: [
						"",
					]
				},
				{
					text: "Python 通用教程",
					collapsible: true,
					children: [
						{
							text: "第 1 章 入门准备",
							collapsible: true,
							children: [
								"mk_py01",
								"mk_py02",
								"mk_py03",
								"mk_py04",
							],
						},
						{
							text: "第 2 章 通用语言特性",
							collapsible: true,
							children: [
								"mk_py05",
								"mk_py06",
							]
						}
					],
				}
			]
		},
		{

			text: "Python 实战:从 0 到 1 搭建直播视频平台",
			icon: "flask",
			collapsible: true,
			prefix: "Python-in-Action-Building-a-Live-Streaming-Video-Platform-from-Scratch/",
			children: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
			]

		},
	],
	"/column/education/": [
		"01",
		"02",
	],
	"/Yuechuangs-Family-EducationHandbook/": "structure",
	"/1v1/93-LiquidLeon/": "structure",
	"/1v1/47-qiuzhen/": [
		{
			text: "Python 冲刺",
			collapsible: true,
			icon: "python",
			children: [
				"docs",
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07-Question1",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
			]
		},
		{
			text: "博客搭建",
			icon: "web1",
			prefix: "Blog/",
			children: [
				"18-web-log",
			]
		}
	],
	"/column/治愈心理学/": "structure",
	"/column/mianshi/": [
		{
			text: "程序员练级攻略",
			icon: "employee-rank",
			children: [
				"05",
			]
		},
		{
			text: "面试攻略",
			icon: "shipinmianshi",
			children: [
				"01",
				"02",
				"03",
				"04",
			]
		}

	],
	"/column/Programming-algorithm-synchronization/": [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
	],
	"/column/playback/": [
		{
			text: "2022年",
			collapsible: true,
			children: [
				"",
				"01-Tommy",
				"02-LKW",
				"03-20220610",
			],
		}
	],

	"/column/javascript-tutorial": [
		"",
		"preface",
		{
			text: "1. 入门篇",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"basic/introduction",
				"basic/history",
				"basic/grammar",
			]
		},
		{
			text: "2. 数据类型",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"types/general",
				"types/null-undefined-boolean",
				"types/number",
				"types/string",
				"types/object",
				"types/function",
				"types/array",
			]
		},
		{
			text: "3. 运算符",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"operators/arithmetic",
				"operators/comparison",
				"operators/boolean",
				"operators/bit",
				"operators/priority",
			],
		},
		{
			text: "4. 语法专题",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"features/conversion",
				"features/error",
				"features/style",
				"features/console",
			]
		},
		{
			text: "5. 标准库",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"stdlib/object",
				"stdlib/attributes",
				"stdlib/array",
				"stdlib/wrapper",
				"stdlib/boolean",
				"stdlib/number",
				"stdlib/string",
				"stdlib/math",
				"stdlib/date",
				"stdlib/regexp",
				"stdlib/json",
			]
		},
		{
			text: "6. 面向对象编程",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"oop/new",
				"oop/this",
				"oop/prototype",
				"oop/object",
				"oop/strict",
			]
		},
		{
			text: "7. 异步操作",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"async/general",
				"async/timer",
				"async/promise",
			]
		},
		{
			text: "8. DOM",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"dom/general",
				"dom/node",
				"dom/nodelist",
				"dom/parentnode",
				"dom/document",
				"dom/element",
				"dom/attributes",
				"dom/text",
				"dom/css",
				"dom/mutationobserver",
			]
		},
		{
			text: "9. 事件",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"events/eventtarget",
				"events/model",
				"events/event",
				"events/mouse",
				"events/keyboard",
				"events/progress",
				"events/form",
				"events/touch",
				"events/drag",
				"events/common",
				"events/globaleventhandlers",
			]
		},
		{
			text: "10. 浏览器模型",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"bom/engine",
				"bom/window",
				"bom/navigator",
				"bom/cookie",
				"bom/xmlhttprequest",
				"bom/same-origin",
				"bom/cors",
				"bom/storage",
				"bom/history",
				"bom/location",
				"bom/arraybuffer",
				"bom/file",
				"bom/form",
				"bom/indexeddb",
				"bom/webworker",
			]
		},
		{
			text: "11. 附录：网页元素接口",
			icon: "24gl-folderOpen",
			collapsible: true,
			children: [
				"elements/a",
				"elements/image",
				"elements/form",
				"elements/input",
				"elements/button",
				"elements/option",
				"elements/video",
			]
		},



	],
	"/column/html-tutorial": [
		"",
		"intro",
		"url",
		"attribute",
		"encode",
		"semantic",
		"text",
		"list",
		"image",
		"link",
		"multimedia",
		"iframe",
		"table",
		"form",
		"elements",
		"mobile",
	],

	"/1v1/89-liuyue/": "structure",
	"/column/Python-thinking/": [
		"",
		{
			text: "开篇词",
			icon: "docs",
			prefix: "thinking/",
			collapsible: true,
			children: [
				"01",
			]
		},
		{
			text: "Pygame",
			icon: "Game",
			collapsible: true,
			prefix: "Pygame",
			children: [
				"01-Pygame-just-met",
				"02-Pgame-picture-processing",
				"03-pygame-keyboard-and-mouse",
				"04-pygame-music-class",
			]
		},
		{
			text: "Python tutorial",
			icon: "python",
			collapsible: true,
			prefix: "Python-tutorial",
			children: [
				"00-Python-introduction",
				"01-Python-Variable",
				"02-Preliminary-DataType"

			]
		}
	],

	"/company/": [
		{
			text: "Company",
			icon: "gongsi",
			children: [
				"conference01",
				"conference02",
			]
		},
		{
			text: "WebSite",
			icon: "web",
			prefix: "WebSite",
			children: [
				"Data"
			]
		}

	],

	"/column/crawler/": [
		"",
		{
			text: "开篇词",
			collapsible: true,
			icon: "Spider",
			children: [
				{ text: "01-Python 环境搭建", icon: "debug", link: "s1_01" },
				// "s1_01",
				{ text: "02-为什么做？", icon: "debug", link: "s1_02" },
				{ text: "03-悦创随笔", icon: "debug", link: "s1_03" },
				{ text: "04-如何被动过万收入", icon: "debug", link: "s1_04" },
				{ text: "04-爬虫技术成就了这些商业公司的", icon: "debug", link: "s1_05" },
			]
		},
		{
			text: "模块一：爬虫基础原理",
			collapsible: true,
			icon: "Spider",
			children: [
				"s2_01",
				"s2_02",
				"s2_03",
				"s2_04",
				"s2_05",
				"s2_06",
				"s2_07",
				"s2_08",
				"s2_09",
				"s2_10",
				"s2_11",
				"s2_12",

			],
		},
		{
			text: "模块二：爬虫基本库的使用",
			icon: "Spider",
			collapsible: true,
			children: [
				"s3_01",
				"s3_02",
				"s3_03",
				"s3_04",
				"s3_05",
				"s3_06",
				"s3_07",
				"s3_08",
				"s3_09",
				"s3_10",
			]
		},
		{
			text: "模块三：多种形式的爬取方法",
			icon: "Spider",
			collapsible: true,
			children: [
				"s4_01",
				"s4_02",
				"s4_06",
			]
		},
		{
			text: "补充",
			icon: "Spider",
			collapsible: true,
			children: [
				{ text: "01-Referer 案例", icon: "debug", link: "replenish01" },
				{ text: "02-更智能的延迟插件", icon: "debug", link: "replenish02" },
				{ text: "03-从输入 url 到页面展现发生了什么？", icon: "debug", link: "replenish03" },
				{ text: "04-Session 与 Cookies", icon: "debug", link: "replenish04" },
				{ text: "05-爬虫分析利器:谷歌Chrome F12抓包分析", icon: "debug", link: "replenish05" },
			],
		},
		{
			text: "杂谈",
			icon: "Spider",
			collapsible: true,
			children: [
				{ text: "01-什么是网络爬虫", icon: "debug", link: "supplement/what-is-web-crawler" },
				{ text: "02-必知必会掌握HTTP基本原理", icon: "debug", link: "supplement/必知必会掌握HTTP基本原理" },
				{ text: "03-为什么写网络爬虫天然就是择Python而用", icon: "debug", link: "supplement/why-is-python-for-crawler" },
				{ text: "04-写网络爬虫程序的三种难度", icon: "debug", link: "supplement/three-state-of-crawler" },
				{ text: "05-快收下这枚 Scrapy Requests 口味的爬虫“回魂丹”", icon: "debug", link: "supplement/Crawler-Speed-101" },
				{ text: "06-正则表达式详解", icon: "debug", link: "supplement/regex" },
				{ text: "07-pyquery 的安装", icon: "debug", link: "supplement/pyquery-install" },
				{ text: "08-lxml 的安装", icon: "debug", link: "supplement/lxml-install" },
				{ text: "09-MongoDB 的安装", icon: "debug", link: "supplement/mongodb-install" },
				{ text: "10-多个站点同时抓取！怎么做到的？", icon: "debug", link: "supplement/many-websites" },
			]
		},
		{
			text: "异步新闻爬虫",
			icon: "Spider",
			collapsible: true,
			children: [
				"Project1-news/01.md",
				"Project1-news/02.md",
				"Project1-news/03.md",
			]
		},
		{
			text: "爬虫800例",
			icon: "Spider",
			collapsible: true,
			prefix: "Practical-operation",
			children: [
				{
					text: "📙requests库+re模块",
					icon: "",
					children: [
						"01-10-lines-of-code-set-2000-pictures-of-beautiful-women",
						{ text: "发现60%女装大佬游走在cosplay领域", icon: "Spider", link: "02-Through-Python-crawler-we-found-that-60-of-womens-bigwigs-roam-the-cosplay-field" },
						{ text: "Python 千猫图，简单技术满足你的收集控", icon: "Spider", link: "03-Python-Thousand-Cats-Chart-a-simple-technique-to-satisfy-your-collection-control" },
						{ text: "那篇千猫图爬虫竟被反爬了,复盘解决", icon: "Spider", link: "04-That-a-thousand-cat-map-crawler-was-even-anti-crawl-todays-review-to-solve-a-little-Python-crawler-120-examples" },

					]
				}

			]
		}
	],
});
