/**
 * Publication Data
 * 
 * Structure:
 * {
 *   categories: [
 *     {
 *       title: "Category Title",
 *       papers: [
 *         {
 *           title: "Paper Title",
 *           authors: ["Jin Li", "Other Author"], // "Jin Li" will be bolded automatically
 *           venue: "Conference Name",
 *           badges: [
 *              { text: "CORE A*", type: "core-a-star" } // Optional
 *           ],
 *           links: [
 *              { text: "Paper", url: "...", type: "paper" }, // type determines icon
 *              { text: "Code", url: "...", type: "code" }
 *           ],
 *           tldr: "TL;DR: ..."
 *         }
 *       ]
 *     }
 *   ]
 * }
 */

const publicationData = [
    {
        category: "Trustworthy Representation Learning",
        papers: [
            {
                title: "Steering Diffusion Models Towards Credible Content Recommendation",
                authors: ["Zhuo Cai", "Shoujin Wang", "Jin Li", "Peilin Zhou", "Victor W. Chu", "Fang Chen", "Tianqing Zhu", "Charu C. Aggarwal"],
                venue: "ICLR 2026",
                badges: [{ text: "CORE A*", type: "core-a-star" }],
                tldr: "TL;DR: A novel diffusion-based model tailored for credible content recommendation."
            },
            {
                title: "Towards Fair Large Language Model-based Recommender Systems without Costly Retraining",
                authors: ["Jin Li", "Huilin Gu", "Shoujin Wang", "Qi Zhang", "Shui Yu", "Chen Wang", "Xiwei Xu", "Fang Chen"],
                venue: "The ACM Web Conference (WWW) 2026",
                badges: [{ text: "CORE A*", type: "core-a-star" }],
                links: [
                    { text: "Paper", url: "https://arxiv.org/abs/2601.17492", type: "paper" },
                ],
                tldr: "TL;DR: A general and efficient debiasing framework for LLM-based recommender systems using the influence function."
            },
            {
                title: "Revealing Multimodal Causality with Large Language Models",
                authors: ["Jin Li", "Shoujin Wang", "Qi Zhang", "Feng Liu", "Tongliang Liu", "Longbing Cao", "Shui Yu", "Fang Chen"],
                venue: "NeurIPS 2025",
                badges: [{ text: "CORE A*", type: "core-a-star" }],
                links: [
                    { text: "Paper", url: "https://arxiv.org/pdf/2509.17784", type: "paper" },
                    { text: "Code", url: "https://github.com/JinLi-i/MLLM-CD", type: "code" }
                ],
                tldr: "TL;DR: Leveraging the knowledge and reasoning capabilities of multimodal LLMs to extend the scope of causal discovery to multimodal unstructured data."
            },
            {
                title: "Generating with Fairness: A Modality-Diffused Counterfactual Framework for Incomplete Multimodal Recommendations",
                authors: ["Jin Li", "Shoujin Wang", "Qi Zhang", "Shui Yu", "Fang Chen"],
                venue: "The ACM Web Conference (WWW) 2025",
                badges: [{ text: "CORE A*", type: "core-a-star" }],
                links: [
                    { text: "Paper", url: "https://dl.acm.org/doi/pdf/10.1145/3696410.3714606", type: "paper" },
                    { text: "Code", url: "https://github.com/JinLi-i/MoDiCF", type: "code" }
                ],
                tldr: "TL;DR: Identifying and alleviating the fairness issue in incomplete multimodal RSs using diffusion generation and causal inference."
            }
        ]
    },
    {
        category: "Multiview Representation Learning",
        papers: [
            {
                title: "SepDiff: Self-Encoding Parameter Diffusion for Learning Latent Semantics",
                authors: ["Zhangkai Wu", "Xuhui Fan", "Jin Li", "Zhilin Zhao", "Hui Chen", "Longbing Cao"],
                venue: "ACM SIGKDD 2025",
                badges: [{ text: "CORE A*", type: "core-a-star" }],
                links: [
                    { text: "Paper", url: "https://dl.acm.org/doi/pdf/10.1145/3711896.3737125", type: "paper" }
                ],
                tldr: "" // Optional
            },
            {
                title: "Learning Canonical F-Correlation Projection for Compact Multiview Representation",
                authors: ["Yun-Hao Yuan", "Jin Li", "Yun Li", "Jipeng Qiang", "Yi Zhu", "Xiaobo Shen", "Jianping Gou"],
                venue: "IEEE CVPR 2022",
                badges: [{ text: "CORE A*", type: "core-a-star" }],
                links: [
                    { text: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2022/papers/Yuan_Learning_Canonical_F-Correlation_Projection_for_Compact_Multiview_Representation_CVPR_2022_paper.pdf", type: "paper" }
                ]
            },
            {
                title: "Learning Simultaneous Facial Canonical Correlation Representation for Face Hallucination",
                authors: ["Yun-Hao Yuan", "Jin Li", "Jipeng Qiang", "Yi Zhu", "Xiaobo Shen", "Yun Li"],
                venue: "IEEE ICASSP 2025",
                badges: [],
                links: [
                    { text: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10887637/", type: "paper" }
                ]
            },
            {
                title: "Learning Fractional Orthogonal Latent Consistent Features for Face Hallucination and Recognition",
                authors: ["Yun-Hao Yuan", "Jin Li", "Yun Li", "Jipeng Qiang", "Bin Li"],
                venue: "IEEE ICASSP 2020",
                badges: [],
                links: [
                    { text: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/9054449/", type: "paper" }
                ]
            },
            {
                title: "Learning Super-Resolution Coherent Facial Features Using Nonlinear Multiset PLS for Low-Resolution Face Recognition",
                authors: ["Yun-Hao Yuan", "Jin Li", "Yun Li", "Jianping Gou", "Jipeng Qiang", "Quan-Sen Sun"],
                venue: "IEEE ICIP 2019",
                badges: [],
                links: [
                    { text: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/8803595/", type: "paper" }
                ]
            },
            {
                title: "Learning Simultaneous Face Super-Resolution Using Multiset Partial Least Squares",
                authors: ["Yun-Hao Yuan", "Jin Li", "Jianping Gou", "Yun Li", "Jipeng Qiang", "Bin Li"],
                venue: "IEEE ICME 2019",
                badges: [{ text: "CORE A", type: "core-a" }], // Note: Using core-a class, assuming exist or similar styling
                links: [
                    { text: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/8784987/", type: "paper" }
                ]
            }
        ]
    },
    {
        category: "Journal Papers",
        papers: [
            {
                title: "OPLS-SR: A Novel Face Super-Resolution Learning Method Using Orthonormalized Coherent Features",
                authors: ["Yun-Hao Yuan", "Jin Li", "Yun Li", "Jipeng Qiang", "Bin Li", "Wankou Yang", "Furong Peng"],
                venue: "Information Sciences, 2021",
                badges: [],
                links: [
                    { text: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0020025521001201", type: "paper" }
                ]
            },
            {
                title: "Learning Unsupervised and Supervised Representations via General Covariance",
                authors: ["Yun-Hao Yuan", "Jin Li", "Yun Li", "Jianping Gou", "Jipeng Qiang"],
                venue: "IEEE Signal Processing Letters, 2020",
                badges: [],
                links: [
                    { text: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/9290371/", type: "paper" }
                ]
            }
        ]
    }
];


// Icons
const icons = {
    paper: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>`
};

function renderPublications() {
    const container = document.getElementById('publications-content');
    if (!container) return;

    let html = '';

    publicationData.forEach(category => {
        html += `<h3 class="subsection-title">${category.category}</h3>`;

        category.papers.forEach(paper => {
            // Format authors
            const authorsHtml = paper.authors.map(author => {
                return author === "Jin Li" ? `<strong>${author}</strong>` : author;
            }).join(', ');

            // Badges
            let badgesHtml = '';
            if (paper.badges) {
                paper.badges.forEach(badge => {
                    badgesHtml += `<span class="badge ${badge.type}">${badge.text}</span>`;
                });
            }

            // Links
            let linksHtml = '';
            if (paper.links) {
                paper.links.forEach(link => {
                    const icon = icons[link.type] || '';
                    linksHtml += `<a href="${link.url}" class="icon-link">${icon} ${link.text}</a>`;
                });
            }

            // TLDR
            const tldrHtml = paper.tldr ? `<p class="pub-tldr">${paper.tldr}</p>` : '';

            html += `
                <div class="publication-item">
                    <div class="pub-title">${paper.title}</div>
                    <div class="pub-authors">${authorsHtml}</div>
                    <div class="pub-venue">${paper.venue} ${badgesHtml} ${linksHtml}</div>
                    ${tldrHtml}
                </div>
            `;
        });
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderPublications);
