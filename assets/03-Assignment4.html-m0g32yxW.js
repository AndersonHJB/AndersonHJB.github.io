import{_ as t}from"./gzh-DnOBNg6W.js";import{_ as p}from"./zsxq-BcdwOI-_.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,c as d,b as v,w as a,a as i,o as F,d as n,e as s}from"./app-CJkn7D_W.js";const m={},u=i("<p>Assignment 4 (code + short report, 10%). Due date: July 3</p><p>Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of:</p><ol><li>Input layer of the word2vec embeddings you prepared in Assignment 3.</li><li>One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.</li><li>Final layer with softmax activation function.</li><li>Use cross-entropy as the loss function.</li><li>Add L2-norm regularization.</li><li>Add dropout. Try a few different dropout rates.</li></ol><p>For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the <strong>training</strong> set. You may only tune your models on your <strong>validation</strong> set.</p><p>Once the development is complete, run your classifier on your <strong>test</strong> set.</p><p>Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).</p><hr><p>使用 PyTorch/Keras 编写一个 python 脚本，训练一个全连接前馈神经网络分类器，将 Amazon 语料库中的文档分类为正类和负类。您的网络必须包含：</p><ol><li>输入层是您在作业3中准备的 word2vec 嵌入。</li><li>一个隐藏层。对于隐藏层，请尝试以下激活函数：ReLU、sigmoid 和 tanh。</li><li>使用 softmax 激活函数的最终层。</li><li>使用交叉熵作为损失函数。</li><li>添加 L2 范数正则化。</li><li>添加丢弃层。尝试几种不同的丢弃率。</li></ol><p>对于这个任务，你必须使用作业1中的训练/验证/测试数据集。在<strong>训练</strong>集上训练你的模型。你只能在你的<strong>验证</strong>集上调整你的模型。</p><p>开发完成后，在你的<strong>测试</strong>集上运行你的分类器。</p><p>在一个表格中报告你的分类精度结果，隐藏层中有三种不同的激活函数（ReLU、sigmoid和tanh）。激活函数对你的结果有什么影响？添加L2范数正则化对结果有什么影响？丢弃率对结果有什么影响？简单解释你的直觉（最多10句）。</p><p>HW4 要求</p><p>使用 PyTorch 和 Keras 训练一个全连接前馈神经网络分类器，来将亚马逊评价分为好评和差评，神经网络中需要包括：</p><ol><li>HW3中训练好的WORD2VEC模型</li><li>一个隐藏层，分别使用到ReLu,sigmoid和tanh三种激活函数</li><li>最终层用柔性最大值传输函数（softmax）作为激活函数</li><li>使用交叉熵函数作为损失函数</li><li>添加L2-norm正则化项</li><li>添加丢弃法 dropout，并尝试不同的速率</li></ol><p>额外要求：</p><p>必须使用 HW1 中输出的训练、验证和测试集来训练模型，只能用训练集进行训练，验证集进行调试，并用测试集来比对准确率， 可以使用带 stopword 或不带 stopword 的集。（暨带_ns和不带_ns的）哪个给出的准确率更高用哪个<br> 输出三个模型，分别是<br> nn_relu.model，使用RELU作为激活函数<br> nn_sigmoid.model，使用sigmoid作为激活函数<br> nn_tanh.model，使用tanh作为激活函数</p><p>建立一个inference.py文件，需要接受两个命令行指令<br> 1：路径到一个.txt文件，文件中包含用于测试的句子，每行一句<br> 2：使用的分类器类型，暨输出的三个模型之一</p>",18),y=s("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"background-color":"#272822",color:"#F8F8F2"}},[s("pre",{class:"shiki monokai vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"# -*- coding: utf-8 -*-")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"# @Time    : 2023/7/1 11:32")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"# @Author  : AI悦创")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"# @FileName: demo8正常版本1.py")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"# @Software: PyCharm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"# @Blog    ：https://bornforthis.cn/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," pandas "),s("span",{style:{color:"#F92672"}},"as"),s("span",{style:{color:"#F8F8F2"}}," pd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," numpy "),s("span",{style:{color:"#F92672"}},"as"),s("span",{style:{color:"#F8F8F2"}}," np")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," gensim.models "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," Word2Vec")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.preprocessing.text "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," Tokenizer")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.preprocessing.sequence "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," pad_sequences")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.utils "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," to_categorical")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.models "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," Sequential")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.layers "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," Dense, Dropout")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.regularizers "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," l2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," keras.optimizers "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," Adam")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," sklearn.preprocessing "),s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," LabelEncoder")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"def"),s("span",{style:{color:"#A6E22E"}}," load_data"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"file_name"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"w2v_model"),s("span",{style:{color:"#F8F8F2"}},"):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    data "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," pd.read_csv(file_name, "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"header"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}},"None"),s("span",{style:{color:"#F8F8F2"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    data.columns "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," ["),s("span",{style:{color:"#E6DB74"}},'"label"'),s("span",{style:{color:"#F8F8F2"}},"] "),s("span",{style:{color:"#F92672"}},"+"),s("span",{style:{color:"#F8F8F2"}}," ["),s("span",{style:{color:"#E6DB74"}},'"word"'),s("span",{style:{color:"#F92672"}}," +"),s("span",{style:{color:"#66D9EF","font-style":"italic"}}," str"),s("span",{style:{color:"#F8F8F2"}},"(i) "),s("span",{style:{color:"#F92672"}},"for"),s("span",{style:{color:"#F8F8F2"}}," i "),s("span",{style:{color:"#F92672"}},"in"),s("span",{style:{color:"#66D9EF"}}," range"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},", data.shape["),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},"])]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    data "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," data.dropna("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"axis"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"how"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#E6DB74"}},'"all"'),s("span",{style:{color:"#F8F8F2"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    data["),s("span",{style:{color:"#E6DB74"}},'"text"'),s("span",{style:{color:"#F8F8F2"}},"] "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," data.iloc[:, "),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},":].apply("),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"lambda"),s("span",{style:{color:"#FD971F","font-style":"italic"}}," row"),s("span",{style:{color:"#F8F8F2"}},": "),s("span",{style:{color:"#E6DB74"}},"' '"),s("span",{style:{color:"#F8F8F2"}},".join(row.dropna().values.astype("),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"str"),s("span",{style:{color:"#F8F8F2"}},")), "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"axis"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    data "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," data[["),s("span",{style:{color:"#E6DB74"}},'"label"'),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#E6DB74"}},'"text"'),s("span",{style:{color:"#F8F8F2"}},"]]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"    # tokenize and pad sequences")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    max_length "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," np.max(data["),s("span",{style:{color:"#E6DB74"}},'"text"'),s("span",{style:{color:"#F8F8F2"}},"].apply("),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"lambda"),s("span",{style:{color:"#FD971F","font-style":"italic"}}," x"),s("span",{style:{color:"#F8F8F2"}},": "),s("span",{style:{color:"#66D9EF"}},"len"),s("span",{style:{color:"#F8F8F2"}},"(x.split())))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    tokenizer "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," Tokenizer()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    tokenizer.fit_on_texts(data["),s("span",{style:{color:"#E6DB74"}},'"text"'),s("span",{style:{color:"#F8F8F2"}},"])")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    sequences "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," tokenizer.texts_to_sequences(data["),s("span",{style:{color:"#E6DB74"}},'"text"'),s("span",{style:{color:"#F8F8F2"}},"])")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    word_index "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," tokenizer.word_index")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    data_features "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," pad_sequences(sequences, "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"maxlen"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}},"max_length)")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"    # prepare embeddings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    embedding_dim "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," w2v_model.vector_size")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    num_words "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#66D9EF"}}," len"),s("span",{style:{color:"#F8F8F2"}},"(word_index) "),s("span",{style:{color:"#F92672"}},"+"),s("span",{style:{color:"#AE81FF"}}," 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    embedding_matrix "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," np.zeros((num_words, embedding_dim))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"    for"),s("span",{style:{color:"#F8F8F2"}}," word, i "),s("span",{style:{color:"#F92672"}},"in"),s("span",{style:{color:"#F8F8F2"}}," word_index.items():")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"        if"),s("span",{style:{color:"#F8F8F2"}}," word "),s("span",{style:{color:"#F92672"}},"in"),s("span",{style:{color:"#F8F8F2"}}," w2v_model.wv:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"            embedding_matrix[i] "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," w2v_model.wv[word]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"    # convert labels to integer values")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    le "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," LabelEncoder()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    labels "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," le.fit_transform(data["),s("span",{style:{color:"#E6DB74"}},'"label"'),s("span",{style:{color:"#F8F8F2"}},"])")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"    return"),s("span",{style:{color:"#F8F8F2"}}," data_features, labels, max_length, embedding_matrix")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"w2v_model "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," Word2Vec.load("),s("span",{style:{color:"#E6DB74"}},'"w2v.model"'),s("span",{style:{color:"#F8F8F2"}},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"train_data, train_labels, max_length, embedding_matrix "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," load_data("),s("span",{style:{color:"#E6DB74"}},"'data2/train.csv'"),s("span",{style:{color:"#F8F8F2"}},", w2v_model)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"val_data, val_labels, _, _ "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," load_data("),s("span",{style:{color:"#E6DB74"}},"'data2/val.csv'"),s("span",{style:{color:"#F8F8F2"}},", w2v_model)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"test_data, test_labels, _, _ "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," load_data("),s("span",{style:{color:"#E6DB74"}},"'data2/test.csv'"),s("span",{style:{color:"#F8F8F2"}},", w2v_model)")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"def"),s("span",{style:{color:"#A6E22E"}}," create_and_train_model"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"activation_function"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"train_data"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"train_labels"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"val_data"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"val_labels"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"max_length"),s("span",{style:{color:"#F8F8F2"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FD971F","font-style":"italic"}},"                           embedding_matrix"),s("span",{style:{color:"#F8F8F2"}},"):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    embedding_dim "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," embedding_matrix.shape["),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    num_words "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," embedding_matrix.shape["),s("span",{style:{color:"#AE81FF"}},"0"),s("span",{style:{color:"#F8F8F2"}},"]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," Sequential()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model.add(Dense("),s("span",{style:{color:"#AE81FF"}},"256"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"activation"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}},"activation_function, "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"kernel_regularizer"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}},"l2("),s("span",{style:{color:"#AE81FF"}},"0.01"),s("span",{style:{color:"#F8F8F2"}},")))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model.add(Dropout("),s("span",{style:{color:"#AE81FF"}},"0.5"),s("span",{style:{color:"#F8F8F2"}},"))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model.add(Dense("),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"activation"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#E6DB74"}},"'softmax'"),s("span",{style:{color:"#F8F8F2"}},"))")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model.compile("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"loss"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#E6DB74"}},"'binary_crossentropy'"),s("span",{style:{color:"#F8F8F2"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FD971F","font-style":"italic"}},"                  optimizer"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}},"Adam("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"learning_rate"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}},"0.001"),s("span",{style:{color:"#F8F8F2"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FD971F","font-style":"italic"}},"                  metrics"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}},"["),s("span",{style:{color:"#E6DB74"}},"'accuracy'"),s("span",{style:{color:"#F8F8F2"}},"])")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model.fit(train_data, train_labels, "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"validation_data"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}},"(val_data, val_labels), "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"epochs"),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}},"10"),s("span",{style:{color:"#F8F8F2"}},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"    return"),s("span",{style:{color:"#F8F8F2"}}," model")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"activation_functions "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," ["),s("span",{style:{color:"#E6DB74"}},'"relu"'),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#E6DB74"}},'"sigmoid"'),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#E6DB74"}},'"tanh"'),s("span",{style:{color:"#F8F8F2"}},"]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"for"),s("span",{style:{color:"#F8F8F2"}}," activation_function "),s("span",{style:{color:"#F92672"}},"in"),s("span",{style:{color:"#F8F8F2"}}," activation_functions:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," create_and_train_model(activation_function, train_data, train_labels, val_data, val_labels, max_length,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"                                   embedding_matrix)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    model.save("),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"f"),s("span",{style:{color:"#E6DB74"}},'"nn_'),s("span",{style:{color:"#AE81FF"}},"{"),s("span",{style:{color:"#F8F8F2"}},"activation_function"),s("span",{style:{color:"#AE81FF"}},"}"),s("span",{style:{color:"#E6DB74"}},'.model"'),s("span",{style:{color:"#F8F8F2"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=s("p",null,"上面的代码，还需要优化。",-1),h=s("p",null,null,-1),g=i(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span>接下来，我会发题给你，你必须阅读题目到最后一行，再开始带我解答这个题目。你必须认真读完我发给你的全部内容，然后解答题目：</span></span>
<span class="line"><span>Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Input layer of the word2vec embeddings you prepared in Assignment 3.</span></span>
<span class="line"><span>2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.</span></span>
<span class="line"><span>3. Final layer with softmax activation function.</span></span>
<span class="line"><span>4. Use cross-entropy as the loss function.</span></span>
<span class="line"><span>5. Add L2-norm regularization.</span></span>
<span class="line"><span>6. Add dropout. Try a few different dropout rates.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Once the development is complete, run your classifier on your **test** set.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).</span></span>
<span class="line"><span>我作业三的代码如下：</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>from gensim.models import Word2Vec  # Gensim中的Word2Vec模型</span></span>
<span class="line"><span>from gensim.models.word2vec import LineSentence  # Gensim中用于处理文本数据的工具</span></span>
<span class="line"><span>import time, string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>start_time = time.time()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def remove_punctuation(word_list):</span></span>
<span class="line"><span>    return [word.translate(str.maketrans(&#39;&#39;, &#39;&#39;, string.punctuation)).lower() for word in word_list]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义训练模型的函数，需要三个参数：正面评论的文件路径、负面评论的文件路径、保存模型的文件路径</span></span>
<span class="line"><span>def train_model(pos_file_path, neg_file_path, model_file_path):</span></span>
<span class="line"><span>    # 使用 with open 来打开文件，这样可以保证文件在用完后会被正确关闭</span></span>
<span class="line"><span>    with open(pos_file_path, &#39;r&#39;) as pos_file, open(neg_file_path, &#39;r&#39;) as neg_file:</span></span>
<span class="line"><span>        # 使用 LineSentence 处理文件中的每一行文本，并将处理结果转为列表，然后将正面和负面评论的列表连接起来</span></span>
<span class="line"><span>        sentences_pos = [remove_punctuation(sentence) for sentence in LineSentence(pos_file)]</span></span>
<span class="line"><span>        sentences_neg = [remove_punctuation(sentence) for sentence in LineSentence(neg_file)]</span></span>
<span class="line"><span>        sentences = sentences_pos + sentences_neg</span></span>
<span class="line"><span>        # 使用连接起来的句子列表创建Word2Vec模型，设置向量大小为100，窗口大小为5，最小词频为1，使用4个工作线程进行训练</span></span>
<span class="line"><span>        model = Word2Vec(sentences=sentences, vector_size=100, window=5, min_count=1, workers=4)</span></span>
<span class="line"><span>        # 保存训练好的模型到指定的文件路径</span></span>
<span class="line"><span>        model.save(model_file_path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Python的入口点，只有直接运行这个脚本时，下面的代码才会被执行</span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    # 正面评论的文件路径</span></span>
<span class="line"><span>    pos_file_path = &#39;data/pos.txt&#39;</span></span>
<span class="line"><span>    # 负面评论的文件路径</span></span>
<span class="line"><span>    neg_file_path = &#39;data/neg.txt&#39;</span></span>
<span class="line"><span>    # 保存模型的文件路径</span></span>
<span class="line"><span>    model_file_path = &#39;w2v.model&#39;</span></span>
<span class="line"><span>    # 调用上面定义的函数进行模型训练</span></span>
<span class="line"><span>    train_model(pos_file_path, neg_file_path, model_file_path)</span></span>
<span class="line"><span>    print(&quot;time:&gt;&gt;&gt;&quot;, time.time() - start_time)</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>额外要求：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>必须使用 HW1 中输出的训练、验证和测试集来训练模型，只能用训练集进行训练，验证集进行调试，并用测试集来比对准确率， 可以使用带 stopword 或不带 stopword 的集。（即带_ns和不带_ns的）哪个给出的准确率更高用哪个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出三个模型，分别是</span></span>
<span class="line"><span>nn_relu.model，使用RELU作为激活函数</span></span>
<span class="line"><span>nn_sigmoid.model，使用sigmoid作为激活函数</span></span>
<span class="line"><span>nn_tanh.model，使用tanh作为激活函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>建立一个inference.py文件，需要接受两个命令行指令</span></span>
<span class="line"><span>1：路径到一个.txt文件，文件中包含用于测试的句子，每行一句</span></span>
<span class="line"><span>2：使用的分类器类型，暨输出的三个模型之一</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在所拥有的文件以及部分数据：</span></span>
<span class="line"><span>训练集：train.csv、train_ns.csv</span></span>
<span class="line"><span>验证集：val_ns.csv、val.csv</span></span>
<span class="line"><span>测试集：test.csv、test_ns.csv</span></span>
<span class="line"><span>其中_ns后缀代表内容已经移除 stopword。</span></span>
<span class="line"><span>注意1：我的所有数据文件已经实现分词，并且第一列都标记了positive或negative。其他列都是分好的词。</span></span>
<span class="line"><span>注意2：不要假设已经将数据加载到了 pandas DataFrame 中，并且 DataFrame 的列为 &#39;label&#39; 和 &#39;text&#39;。切记我并没有提前完成，我其他的也是，全部没有提前完成。</span></span>
<span class="line"><span>接下来我给你提供每个文件的部分数据。</span></span>
<span class="line"><span>train_ns.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>positive,little,dude,going,running,every,day,It&#39;s,great,holds,phone,securely,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,don&#39;t,know,took,long,get,one,,,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>negative,cord,cheap,wires,coming,plastic,using,2,DAYS,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,might,want,look,lineup,want,capable,holding,,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>negative,It&#39;s,pretty,small,even,big,enough,either,bigger,cats,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,remove,app,screens,,,,,,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>train.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>positive,I,went,through,two,others,before,finding,this,one,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,I,was,doubtful,that,anything,could,survive,the,tugging,and,pulling,of,his,use,and,the,weight,of,his,jackets,,,,,</span></span>
<span class="line"><span>positive,She,watched,the,accompanying,DVD,video,and,immediately,set,out,on,a,grocery,shopping,spree,and,began,to,use,this,fantastic,machine,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>val_ns.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,Actually,don&#39;t,need,many,given,small,overall,size,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,do&#39;t,drink,coffee,like,cleaning,glass,shards,glass,pot,broke,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,easy,scoop,cookie,dough,uniform,sizes,goopy,fingers,trying,get,dough,spoon,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>val.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,Very,hard,to,adjust,the,volume,when,the,static,begins,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,Why?,Because,I,have,been,cutting,fruit,for,so,long,that,I,can,do,it,practically,blindfolded,,,,,,,,</span></span>
<span class="line"><span>negative,But,I,want,a,boar,bristle,brush,not,a,everyday,brushI,was,expecting,great,things,from,my,first,boar,hair,ionic,bristle,combo,brush,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>test_ns.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,anxious,try,looking,forward,taking,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,older,KitchenAid,didn&#39;t,feel,could,justify,pricey,upgrade,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,friend,gave,hersbut,could,find,guidance,box,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,You,have,to,remove,the,case,every,time,you,charge,the,phone,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,For,the,1299,it&#39;s,a,solid,deal,and,gives,you,3,mixing,bowls,that,will,last,you,a,long,time,,,,,</span></span>
<span class="line"><span>negative,Had,I,received,the,item,I,ordered,the,review,would,be,higher,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span>接下来，我会发题给你，你必须阅读题目到最后一行，再开始带我解答这个题目。你必须认真读完我发给你的全部内容，然后解答题目：</span></span>
<span class="line"><span>Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Input layer of the word2vec embeddings you prepared in Assignment 3.</span></span>
<span class="line"><span>2. One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.</span></span>
<span class="line"><span>3. Final layer with softmax activation function.</span></span>
<span class="line"><span>4. Use cross-entropy as the loss function.</span></span>
<span class="line"><span>5. Add L2-norm regularization.</span></span>
<span class="line"><span>6. Add dropout. Try a few different dropout rates.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For this assignment, you must use your training/validation/test data splits from Assignment 1. Train your models on the **training** set. You may only tune your models on your **validation** set. </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Once the development is complete, run your classifier on your **test** set.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Report your classification accuracy results in a table with three different activation functions in the hidden layer (ReLU, sigmoid and tanh). What effect do activation functions have on your results? What effect does addition of L2-norm regularization have on the results? What effect does dropout have on the results? Explain your intuitions briefly (up to 10 sentences).</span></span>
<span class="line"><span>我作业三训练的模型名称是：w2v.model</span></span>
<span class="line"><span></span></span>
<span class="line"><span>额外要求：</span></span>
<span class="line"><span>必须使用 HW1 中输出的训练、验证和测试集来训练模型，只能用训练集进行训练，验证集进行调试，并用测试集来比对准确率， 可以使用带 stopword 或不带 stopword 的集。（即带_ns和不带_ns的）哪个给出的准确率更高用哪个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出三个模型，分别是</span></span>
<span class="line"><span>nn_relu.model，使用RELU作为激活函数</span></span>
<span class="line"><span>nn_sigmoid.model，使用sigmoid作为激活函数</span></span>
<span class="line"><span>nn_tanh.model，使用tanh作为激活函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>建立一个inference.py文件，需要接受两个命令行指令</span></span>
<span class="line"><span>1：路径到一个.txt文件，文件中包含用于测试的句子，每行一句</span></span>
<span class="line"><span>2：使用的分类器类型，暨输出的三个模型之一</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在所拥有的文件以及部分数据：</span></span>
<span class="line"><span>训练集：train.csv、train_ns.csv</span></span>
<span class="line"><span>验证集：val_ns.csv、val.csv</span></span>
<span class="line"><span>测试集：test.csv、test_ns.csv</span></span>
<span class="line"><span>其中_ns后缀代表内容已经移除 stopword。</span></span>
<span class="line"><span>注意1：我的所有数据文件已经实现分词，并且第一列都标记了positive或negative。其他列都是分好的词。</span></span>
<span class="line"><span>注意2：不要假设已经将数据加载到了 pandas DataFrame 中，并且 DataFrame 的列为 &#39;label&#39; 和 &#39;text&#39;。切记我并没有提前完成，我其他的也是，全部没有提前完成。</span></span>
<span class="line"><span>接下来我给你提供每个文件的部分数据。</span></span>
<span class="line"><span>train_ns.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>positive,little,dude,going,running,every,day,It&#39;s,great,holds,phone,securely,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,don&#39;t,know,took,long,get,one,,,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>negative,cord,cheap,wires,coming,plastic,using,2,DAYS,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,might,want,look,lineup,want,capable,holding,,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>negative,It&#39;s,pretty,small,even,big,enough,either,bigger,cats,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,remove,app,screens,,,,,,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>train.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>positive,I,went,through,two,others,before,finding,this,one,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,I,was,doubtful,that,anything,could,survive,the,tugging,and,pulling,of,his,use,and,the,weight,of,his,jackets,,,,,</span></span>
<span class="line"><span>positive,She,watched,the,accompanying,DVD,video,and,immediately,set,out,on,a,grocery,shopping,spree,and,began,to,use,this,fantastic,machine,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>val_ns.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,Actually,don&#39;t,need,many,given,small,overall,size,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,do&#39;t,drink,coffee,like,cleaning,glass,shards,glass,pot,broke,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,easy,scoop,cookie,dough,uniform,sizes,goopy,fingers,trying,get,dough,spoon,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>val.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,Very,hard,to,adjust,the,volume,when,the,static,begins,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,Why?,Because,I,have,been,cutting,fruit,for,so,long,that,I,can,do,it,practically,blindfolded,,,,,,,,</span></span>
<span class="line"><span>negative,But,I,want,a,boar,bristle,brush,not,a,everyday,brushI,was,expecting,great,things,from,my,first,boar,hair,ionic,bristle,combo,brush,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>test_ns.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,anxious,try,looking,forward,taking,,,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,older,KitchenAid,didn&#39;t,feel,could,justify,pricey,upgrade,,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,friend,gave,hersbut,could,find,guidance,box,,,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test.csv 部分数据如下：</span></span>
<span class="line"><span>\`\`\`csv</span></span>
<span class="line"><span>negative,You,have,to,remove,the,case,every,time,you,charge,the,phone,,,,,,,,,,,,,</span></span>
<span class="line"><span>positive,For,the,1299,it&#39;s,a,solid,deal,and,gives,you,3,mixing,bowls,that,will,last,you,a,long,time,,,,,</span></span>
<span class="line"><span>negative,Had,I,received,the,item,I,ordered,the,review,would,be,higher,,,,,,,,,,,,,</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',5);function f(_,w){const o=r("Tabs");return F(),d("div",null,[u,v(o,{id:"139",data:[{id:"1. 能正常运行的版本"},{id:"2."}]},{title0:a(({value:e,isActive:l})=>[n("1. 能正常运行的版本")]),title1:a(({value:e,isActive:l})=>[n("2.")]),tab0:a(({value:e,isActive:l})=>[y,b]),tab1:a(({value:e,isActive:l})=>[h]),_:1}),g])}const E=c(m,[["render",f],["__file","03-Assignment4.html.vue"]]),I=JSON.parse('{"path":"/1v1/48-Bob/03-Assignment4.html","title":"MSCI 641 Assignment 4","lang":"zh-CN","frontmatter":{"title":"MSCI 641 Assignment 4","date":"2023-06-29T08:00:56.000Z","icon":"code","author":"AI悦创","isOriginal":true,"category":["Python 一对一教学"],"tag":["Python 一对一教学"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"footer":"长期招收编程一对一学员！微信：Jiabcdefh, <a href=\\"https://beian.miit.gov.cn/\\" target=\\"_blank\\">闽ICP备19021486号-6</a>","description":"Assignment 4 (code + short report, 10%). Due date: July 3 Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify...","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/1v1/48-Bob/03-Assignment4.html"}],["meta",{"property":"og:site_name","content":"AI悦创-Python一对一辅导"}],["meta",{"property":"og:title","content":"MSCI 641 Assignment 4"}],["meta",{"property":"og:description","content":"Assignment 4 (code + short report, 10%). Due date: July 3 Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/gzh.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-01T04:34:37.000Z"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"Python 一对一教学"}],["meta",{"property":"article:published_time","content":"2023-06-29T08:00:56.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-01T04:34:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MSCI 641 Assignment 4\\",\\"image\\":[\\"https://bornforthis.cn/gzh.jpg\\",\\"https://bornforthis.cn/zsxq.jpg\\"],\\"datePublished\\":\\"2023-06-29T08:00:56.000Z\\",\\"dateModified\\":\\"2023-07-01T04:34:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AI悦创\\"}]}"]]},"headers":[],"git":{"createdTime":1688028737000,"updatedTime":1688186077000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":5}]},"readingTime":{"minutes":11.98,"words":3594},"localizedDate":"2023年6月29日","excerpt":"<p>Assignment 4 (code + short report, 10%). Due date: July 3</p>\\n<p>Write a python script using PyTorch/Keras to train a fully-connected feed-forward neural network classifier to classify documents in the Amazon corpus into positive and negative classes. Your network must consist of:</p>\\n<ol>\\n<li>Input layer of the word2vec embeddings you prepared in Assignment 3.</li>\\n<li>One hidden layer. For the hidden layer, try the following activation functions: ReLU, sigmoid and tanh.</li>\\n<li>Final layer with softmax activation function.</li>\\n<li>Use cross-entropy as the loss function.</li>\\n<li>Add L2-norm regularization.</li>\\n<li>Add dropout. Try a few different dropout rates.</li>\\n</ol>","copyright":{"author":"AI悦创"},"autoDesc":true}');export{E as comp,I as data};
