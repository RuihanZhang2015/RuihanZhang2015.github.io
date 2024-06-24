---
layout: page
title: ""
permalink: "/cv/"
---

# EDUCATION

### Massachusetts Institute of Technology                                                                  

Ph.D. in Media Arts and Sciences | GPA 5.0/5.0   

Cambridge, MA, Dec 2024 (Expected)

Selected Courses: Advances in Computer Vision, Advanced Natural Language Processing, Dynamic Programming and Reinforcement Learning, Tissue vs Silicon in Machine Learning, Brain Algorithms

### Massachusetts Institute of Technology — Media Lab                                                                           

M.S. in Media Arts and Sciences | GPA 4.85/5.0

Cambridge, MA, June 2021

Selected Courses: Machine Learning, Information and Inference, Computational Biology: Genomes, Networks, Evolution, Fields, Forces, and Flows in Biological systems, Nucleic Acids


### 2015-2019 Shanghai Jiao Tong University

Bachelor in Life Science, Zhiyuan Honor Program | GPA 93/100 ( Rank 1/7 )

Shanghai, China, July 2019

Zhiyuan Honor Program selects top 10% students of different majors, featuring interdisciplinary training and small classroom teaching.
    
Selected Courses:  Mathematical Analysis, Linear Algebra, Physics, Physics Laboratory, Chemical Principle, Chemistry Laboratory, Biochemistry, Neurobiology, Genetics, Digital Signal Processing, Biostatiscs, Cell Biology, Biology Laboratory

### 2018.1-2018.3 St John’s College, University of Cambridge

- Lent term exchange student, sponsored by St John’s College

<br>

# RESEARCH EXPERIENCE

### Jan.2020-present Mapping Spatial Transcriptome of an Entire Vertebrate 

MIT, Brain and Cognitive Sciences, Cambridge, MA [Research Project]

Our project focuses on applying expansion sequencing technology to read out RNA expression profiles with subcellular resolution in the zebrafish brain. 

-  Designed and led the project to map the RNA expression profiles of the zebrafish brain.

- Developed the imaging analysis (registration, stitching, segmentation) tools for terabyte level data in collaboration with a computer vision group.

- Developed bioinformatic tools which selected cell type marker genes in R and Python.

<br>


### Feb.2022-May.2022  Towards photo-realistic face swapped videos

MIT, Cambridge, MA [Course Project for 6.869 Computer Vision]

The recent advances in face swapping techniques hold great potential in storytelling for ordinary people. Face swapping conceals the identities of interviewees while preserving their contagious facial expression. In this project, we presented methods to perform face swapping in the context of protecting the identities of Asian woman interviewees. We provided an entire pipeline to synthesize artificial Asian faces, applying face swapping and video super resolution methods to enhance the spatial resolution. We show that similarity scores for face shape enables us to find the best-matching source faces, which leads to the best face swapping results. We also showed that SimSwap trained with high resolution images generate realistic face swapped videos. Applying video super methods on these face swapped videos further enhance their resolution. We hope our methods allow individuals to share their personal growth and struggles with minimal privacy concern.

- Implemented SimSwap network structure to achieve face swapping with a high resolution.

- Compared various video super resolution methods and demonstrated their performance in enhancing synthesized video resolution.

<br>

### Feb.2022-May.2022  Solving American Put Option Prices with Dynamic Programming

MIT, Cambridge, MA [Course Project for 6.231 Dynamic programming and reinforcement learning]

An option is a derivative contract that gives its owner the right but not the obligation to buy or sell an underlying asset. American options may exercise at any time before expiry. American option can be formulated as an optimal control MDP (Markov Decision Process) problem, where the underlying process is Geometric Brownian motion. In this project, we compared several methods for option pricing for option pricing. We show that the approximate value iteration and Q learning have the advantage over the naive approach for its better capturing the expected future return when establishing the mapping between current stock price, time and the option price. Q-learning has the computational advantage over approximate value iteration because the unbiased next state sampling. These methods generalized well from the single stock option to the multi-stock ETF pricing, with radial basis functions or the multi-layer perceptron as the basis function for computing features from high-dimension inputs. We demonstrated that dynamical programming methods prove a handy tool for option pricing.

- Synthesized stock price datasets by simulating trajectories with Brownian emotion.

- Implemented approximate value iteration and approximate policy iteration algorithm to compute the optimal stopping policy.

- Compared the performance of various base functions and multi-layer perceptron for approximating value function and Q function. 

<br>

### Sept.2021-Nov.2021. Affect Encoding in Word Embeddings

MIT, Cambridge, MA. [Course Project for 6.864 Natural Language Processing]

A growing research interest in Natural Language Processing (NLP) is investigating the meaning encoded in the word embeddings from large pre-trained models. We investigated how the affect-related meaning in English lexicon are encoded in popular word embeddings in NLP. The affect theory uses notions of valence, arousal and dominance as the three dimensions of affect meaning. In our project, we used the human labeled dataset as the ground truth, and performed various tests (e.g. PCA, Spearman correlation, and logistic regression) to investigate modern word embeddings' ability to encode affect meaning. Our results showed interesting correlations between several tested word embeddings and human affect senses. Furthermore, we fine-tuned a BERT-based model with affect-value regression task and applied it on a downstream affect-related task to study the effect of our affect intervention with transfer learning and few-shot learning. Embeddings from enhanced affect encoding had much better performance than vanilla BERT model. This result suggests that affective embeddings can be helpful on such sentiment-analysis tasks and the methodology of enhancing the affective dimensions of word embeddings can be applied generally in the specific domains of natural language processing.

- Wrote dataloaders for various input datasets to different language models.

- Demonstrated the utility of contextualized word embedding in encoding affect information in the few-shot learning scheme.

<br>

###  Apr.2018-July.2022. AlphaTracker: A Multi-Animal Tracking and Behavioral Analysis Tool

MIT, Brain and Cognitive Sciences, Cambridge, MA [Research Project]

Computer vision tools have emerged as a powerful tool to elevate behavioral research. This protocol describes a computer vision machine learning pipeline called AlphaTracker\cite{padilla2022cortical}, which has minimal hardware requirements and produces reliable tracking of multiple unmarked animals, as well as behavioral clustering. AlphaTracker combines a top-down pose-estimation software combined with unsupervised clustering to facilitate behavioral motif discovery that will accelerate behavioral research\cite{padilla2022cortical,Wiltschko2015-um,Pereira2020-ci}.  All steps of the protocol are provided as open-source software with graphic user interfaces or implementable with command-line prompts. Users with a graphical processing unit (GPU) can model and analyze animal behaviors of interest in less than a day. We also provide Jupyter Notebooks that can be run on cloud resources such as Google Colaboratory. 

- Adapted multi-object tracking, pose estimation and unsupervised clustering algorithms for analyzing rodent social behavior.

- Project leader

- Supervised the development of a JavaScript and HTML based UI for result inspection and interactive correction of the tracking errors, which enables high-throughput behavioral analysis.

<br>

### Apr.2018-Feb.2019 Cortical ensembles orchestrate social competition through hypothalamic outputs

MIT, Brain and Cognitive Sciences, Cambridge, MA [Research Project]

Most social species self-organize into dominance hierarchies, which decreases aggression and conserves energy, but it is not clear how individuals know their social rank. We have only begun to learn how the brain represents social rank and guides behaviour on the basis of this representation. The medial prefrontal cortex (mPFC) is involved in social dominance in rodents and humans. Yet, precisely how the mPFC encodes relative social rank and which circuits mediate this computation is not known. We developed a social competition assay in which mice compete for rewards, as well as a computer vision tool (AlphaTracker) to track multiple, unmarked animals. A hidden Markov model combined with generalized linear models was able to decode social competition behaviour from mPFC ensemble activity. Population dynamics in the mPFC predicted social rank and competitive success. Finally, we demonstrate that mPFC cells that project to the lateral hypothalamus promote dominance behaviour during reward competition. Thus, we reveal a cortico-hypothalamic circuit by which the mPFC exerts top-down modulation of social dominance.

- Advisor: Kay Tye, PhD

- Performed sterotaxic surgeries on mice brain to inject optogenetic opsins in the mice brain which manipulates neural activities.

- Developed behavioral readouts for studying social dominance with designed assays.

- 

<br>

### Jan.2018-Mar.2018 The electrophysiological properties of maturing hippocampal neurons

University of Cambridge, Dept. of Physiology, Development and Neuroscience, Cambridge, UK [Research Project]

- Advisor: Ole Paulsen, MD, PhD

- Studied the electrophisiology of hippocampal neurons of different cell types and developmental stages from both hemisphere with whole-cell patch clamping.

- Developed an algorithm in MATLAB to analyze neural electrophysiological properties from collected electrophysiological data.

<br>

### July.2017-Aug.2018 Large-scale imaging and data processing of zebrafish brain with calcium sensor and voltage-sensitive dye

Duke University, Dept. of Biomedical Engineering, Durham, NC [Research Project]

- Advisor: Yiyang Gong, PhD

- Adapted the algorithm PCA/ICA (principle/independence component analysis) and CNMFE (constrained non-negative matrix factorization) to process the calium and voltage imaging data on zebrafish brain.

- Developed a GUI in MATLAB for verifying extraced neural activity traces which contributes to the analysis efficiency.

<br>

### Feb.2016-Jan.2018 Functions of miRNA-7 and miR-17-92 in the arcuate nucleus in the obesity phenotype

Shanghai Jiao Tong University, School of Life Sciences and Biotechnology, Shanghai, China

- Advisor: Tao Sun, PhD

- Performed qPCRs on the predicted targets of certain microRNAs and validated the identified targets with immunohistology.

- Developed MATLAB scripts to automate and accelerate cell counting from fluorescent images acquired from confocal microscopy.

<br>

# SKILLS

- Research skills Stereotaxic surgery, Immunohistochemistry, Confocal imaging, qPCR, Patch clamping on cell culture, Optogenetic stimulation during behavioral assays, Biostatistics, Calcium/voltage imaging data analysis, Digital signal processing, GUI building for video scoring

- Coding Language: Python, MATLAB, C++

- Other skills: HTML, JavaScript; Adobe Illustrator, Adobe Photoshop, DaVinci, Final Cut Pro, Adobe Premiere

<br>

# AWARDS & SCHOLARSHIP

- 2013 National Olympiad in Informatics in Province
    
    First prize, Jiangsu Province
    
- 2014 China High School Biology Olympiad，

    First prize, Jiangsu Province
    
- 2014 Chinese Mathematical Olympiad in Senior，

    First prize, Jiangsu Province
    
- 2014 Chinese Chemistry Olympiad，Bronze medal, National Final
    
    I was the first student from my high school in the past 10 years to enter the National Final
    
- 2016, 2017 National Scholarship
    
    Awarded to students who are top 10%  in GPA in Zhiyuan College, the rate national wide is 2/1000
    
- 2016, 2017 Zhiyuan Honor Scholarship

- 2016 - present Tanglixin Scholarship
    
    A very competitive scholarship sponsored by a Chinese entrepreneur Mr. Lixin Tang. Once awarded,  the   student will be sponsored annually until graduation.
    

<br>


# PUBLICATION

- Goodwin, D.R., Vaughan, A., Leibel, D., Alon, S., Henry, G.L., Cheng, A., Chen, X., **Zhang, R.**, Xue, A.G., Wassie, A.T., Sinha, A., Bando, Y., Kajita, A., Marblestone, A.H., Zador, A.M., Boyden, E.S., Church, G.M., Kohman, R.E., Expansion Sequencing of RNA Barcoded Neurons in the Mammalian Brain: Progress and Implications for Molecularly Annotated Connectomics (Submitted to Biorxiv)

- Lauenburg, L., Lin, Z., **Zhang, R.**, Santos, M.D., Huang, S., Arganda-Carreras, I., Boyden, E.S., Pfister, H. and Wei, D., 2022. Instance Segmentation of Unlabeled Modalities via Cyclic Segmentation GAN. arXiv preprint arXiv:2204.03082

- Presentation: Zhang, Y., Chen, W., **Zhang, R.**, Zhang, X., 2022. Affect encoding in word embedding, Experiments in Linguistic Meaning conference. https://www.elm-conference.net/elm-2/

- **Zhang, R.**, 2021. Towards Mapping Spatial Transcriptome of an entire vertebrate brain. (Master thesis) DSpace@MIT.

- Padilla-Coreano, N., Batra, K., Patarino, M., Chen, Z., Rock, R.R., **Zhang, R.**, Hausmann, S.B., Weddington, J.C., Patel, R., Zhang, Y.E. and Fang, H.S., 2022. Cortical ensembles orchestrate social competition through hypothalamic outputs. Nature, 603(7902), pp.667-671.

- Chen, Z., **Zhang, R.**, Zhang, Y.E., Zhou, H., Fang, H.S., Rock, R.R., Bal, A., Padilla-Coreano, N., Keyes, L., Tye, K.M. and Lu, C., 2020. AlphaTracker: a multi-animal tracking and behavioral analysis tool. Biorxiv.

- Gao, Y., Li, J., Zhang, Z., **Zhang, R.**, Pollock, A. and Sun, T., 2019. MicroRNA miR-7 and miR-17-92 in the arcuate nucleus of Mouse Hypothalamus regulate sex-specific diet-induced obesity. Molecular Neurobiology, 56(11), pp.7508-7521.


