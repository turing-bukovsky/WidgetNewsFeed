var _0x1f2e=['forEach','news-feed-item','_blank','href','link','mouseup\x20mouseleave\x20click','setProperty','--animation-state','running','paused','sentiment-bar-container','span','sentiment-bar-middle-delimiter','impact','sentiment-bar\x20','sentiment-bar','title','delimiter','innerHTML','&#9679;','time-published','timePublished','timestamp','refresh','bind','attachShadow','cloneNode','shadowRoot','log','test','container','news-feed-container','find','news-feed-one','animation-wrapper','news-feed-two','--animation-duration','observedAttributes','asset','attributeChangedCallback','createElement','style','textContent','\x0a:host\x20{\x0a\x20\x20\x20\x20all:\x20initial;\x20/*\x201st\x20rule\x20so\x20subsequent\x20properties\x20are\x20reset.\x20*/\x0a\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22SFNS\x20Display\x22,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20Oxygen,\x20Ubuntu,\x20Cantarell,\x20\x22Fira\x20Sans\x22,\x20\x22Droid\x20Sans\x22,\x20\x22Helvetica\x20Neue\x22,\x20Arial,\x20sans-serif,\x20\x22Apple\x20Color\x20Emoji\x22,\x20\x22Segoe\x20UI\x20Emoji\x22,\x20\x22Segoe\x20UI\x20Symbol\x22;\x0a\x0a\x20\x20\x20\x20--animation-duration:\x2013s;\x0a\x20\x20\x20\x20--animation-state:\x20running;\x0a}\x0a\x0a.delimiter\x20{\x0a\x20\x20\x20\x20font-size:\x200.45em;\x0a\x20\x20\x20\x20margin:\x200\x200.5rem\x200\x200.5rem;\x0a}\x0a\x0a.time-published\x20{\x0a\x20\x20\x20\x20padding-right:\x2050px;\x0a}\x0a\x0a.news-feed-container\x20{\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20height:\x2040px;\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20background-color:\x20#333236;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20flex-flow:\x20row\x20wrap;\x0a\x20\x20\x20\x20white-space:\x20nowrap;\x0a}\x0a\x0a.animation-wrapper\x20div\x20{\x0a\x20\x20\x20animation-play-state:\x20var(--animation-state);\x0a}\x0a.title{\x0a\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20text-shadow:\x20-1px\x20-1px\x200\x20#333236,\x201px\x20-1px\x200\x20#333236,\x20-1px\x201px\x200\x20#333236,\x201px\x201px\x200\x20#333236;\x0a}\x0a\x0a.title:hover::after{\x0a\x20\x20background:\x20white;\x20\x0a}\x0a\x0a.title::after{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20height:\x202px;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20z-index:\x20-1;\x0a}\x0a\x0a.news-feed-one\x20{\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20display:flex;\x0a\x20\x20\x20\x20position:relative;\x0a\x20\x20\x20\x20transition:\x20transform\x200.3s;\x0a\x20\x20\x20\x20animation:slide-one\x20var(--animation-duration)\x20linear\x20infinite;\x0a}\x0a\x0a.news-feed-two\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20display:flex;\x0a\x20\x20\x20\x20transition:\x20transform\x200.3s;\x0a\x20\x20\x20\x20animation:slide-two\x20var(--animation-duration)\x20linear\x20infinite;\x0a}\x0a\x0a.news-feed-item\x20{\x0a\x20\x20\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a}\x0a\x0a.sentiment-bar-container\x20{\x20\x0a\x20\x20\x20\x20overflow:\x20hidden;\x20\x20\x0a\x20\x20\x20\x20width:\x20100px;\x0a\x20\x20\x20\x20height:\x207px;\x0a\x20\x20\x20\x20margin:\x200\x200.75rem\x200\x200.75rem;\x0a\x20\x20\x20\x20background-color:\x20#000000;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#4D4B4B;\x0a\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20}\x0a\x0a.sentiment-bar\x20{\x0a\x20\x20\x20\x20background-color:\x20#000000;\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20position:\x20relative;\x0a}\x0a\x0a.sentiment-bar-middle-delimiter\x20{\x0a\x20\x20\x20\x20border-left:\x201px\x20solid\x20#292929;\x0a\x20\x20\x20\x20height:\x207px;\x0a\x20\x20\x20\x20left:\x2049.5%;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a}\x0a\x0a\x0a.sentiment-bar-positive\x20{\x0a\x20\x20\x20\x20background-color:\x20#53B987;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20position:\x20relative;\x0a}\x0a\x0a.sentiment-bar-negative\x20{\x0a\x20\x20\x20\x20background-color:\x20#EB4D5C;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20position:\x20relative;\x0a}\x0a\x0a@keyframes\x20slide-one\x20{\x20\x0a\x20\x200%{\x0a\x20\x20\x20\x20\x20\x20transform:\x20translateX(0%);\x0a\x20\x20}\x0a\x20\x20100%{\x0a\x20\x20\x20\x20\x20\x20transform:\x20translateX(-100%);\x0a\x20\x20}\x0a}\x0a\x0a@keyframes\x20slide-two\x20{\x20\x0a\x20\x200%{\x0a\x20\x20\x20\x20\x20\x20transform:\x20translateX(100%);\x0a\x20\x20}\x0a\x20\x20100%{\x0a\x20\x20\x20\x20\x20\x20transform:\x20translateX(0%);\x0a\x20\x20}\x0a}\x0a\x0a.crypto-logo\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20padding:\x200.4rem\x200\x200.0rem\x201rem;\x0a}\x0a\x0a.crypto-mask\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20height:\x2040px;\x0a}\x0a','POST','addEventListener','readystatechange','readyState','status','response','Connection\x20error','send','stringify','\x0a\x20\x20\x20\x20\x20\x20\x20\x20query\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20daily(currencyId:\x20\x22','\x0a\x20\x20\x20\x20\x20\x20query\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20currencies\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20code\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','data','div','crypto-mask','appendChild','className','crypto-logo','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x22157\x22\x20height=\x2227\x22\x20viewBox=\x220\x200\x20157\x2027\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M27.9719\x2014.8274H16.6057C16.1018\x2014.8274\x2015.6348\x2015.0978\x2015.3838\x2015.5356L11.9382\x2021.565C11.8973\x2021.635\x2011.8234\x2021.6798\x2011.7417\x2021.6798H11.4323C10.6697\x2021.6798\x209.96341\x2021.2732\x209.58207\x2020.6117L9.4809\x2020.4366C9.44004\x2020.3665\x209.44004\x2020.2809\x209.4809\x2020.2109L12.9382\x2014.1367C13.1873\x2013.7028\x2013.1873\x2013.1698\x2012.9382\x2012.7339L9.45561\x206.67534C9.41475\x206.6053\x209.41475\x206.51969\x209.45561\x206.44965L9.58207\x206.22981C9.96146\x205.5722\x2010.6638\x205.16751\x2011.4226\x205.16751H11.6269C11.7067\x205.16751\x2011.7806\x205.21031\x2011.8214\x205.27841L15.3644\x2011.302C15.6154\x2011.7397\x2016.0823\x2012.0102\x2016.5862\x2012.0102H27.9719C28.7209\x2012.0102\x2029.1898\x2011.1989\x2028.8143\x2010.551L23.7266\x201.74909L23.7168\x201.73157C23.711\x201.72185\x2023.7052\x201.71213\x2023.6993\x201.7024C23.6429\x201.60706\x2023.5826\x201.51561\x2023.5184\x201.42806C22.8705\x200.538924\x2021.8277\x200\x2020.7148\x200H9.20851C9.06843\x200\x208.92835\x200.00973084\x208.79021\x200.0272412C7.84271\x200.140086\x206.97886\x200.649829\x206.41658\x201.42223C6.34459\x201.51951\x206.2765\x201.62263\x206.21618\x201.72769L0.463053\x2011.693C0.192615\x2012.16\x200.0408592\x2012.6756\x200.00778405\x2013.197C0.00389286\x2013.2709\x200\x2013.3468\x200\x2013.4207C0\x2014.018\x200.153703\x2014.6134\x200.463053\x2015.1484L6.21618\x2025.1138C6.29595\x2025.2519\x206.38545\x2025.3842\x206.48079\x2025.5068C7.08198\x2026.2811\x207.98668\x2026.7734\x208.9731\x2026.8415C9.05092\x2026.8473\x209.13069\x2026.8492\x209.20851\x2026.8492H9.22992H20.7031C20.9833\x2026.8492\x2021.2576\x2026.8142\x2021.5222\x2026.75C22.2849\x2026.5652\x2022.9717\x2026.1216\x2023.4561\x2025.4971C23.5456\x2025.3823\x2023.6273\x2025.2616\x2023.7013\x2025.1352C23.7071\x2025.1254\x2023.7129\x2025.1177\x2023.7188\x2025.1079L23.7227\x2025.1002L28.8162\x2016.2885C29.1898\x2015.6387\x2028.7209\x2014.8274\x2027.9719\x2014.8274Z\x22\x20fill=\x22url(#paint0_linear)\x22/>\x0a\x20\x20\x20\x20\x20\x20<g\x20opacity=\x220.25\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20opacity=\x220.25\x22\x20d=\x22M27.9719\x2014.8274H16.6057C16.1018\x2014.8274\x2015.6348\x2015.0978\x2015.3838\x2015.5356L11.9382\x2021.565C11.8973\x2021.635\x2011.8234\x2021.6798\x2011.7417\x2021.6798H11.4323C10.6697\x2021.6798\x209.96341\x2021.2732\x209.58207\x2020.6117L9.4809\x2020.4366C9.44004\x2020.3665\x209.44004\x2020.2809\x209.4809\x2020.2109L12.9382\x2014.1367C13.1873\x2013.7028\x2013.1873\x2013.1698\x2012.9382\x2012.7339L9.45561\x206.67534C9.41475\x206.6053\x209.41475\x206.51969\x209.45561\x206.44965L9.58207\x206.22981C9.96146\x205.5722\x2010.6638\x205.16751\x2011.4226\x205.16751H11.6269C11.7067\x205.16751\x2011.7806\x205.21031\x2011.8214\x205.27841L15.3644\x2011.302C15.6154\x2011.7397\x2016.0823\x2012.0102\x2016.5862\x2012.0102H27.9719C28.7209\x2012.0102\x2029.1898\x2011.1989\x2028.8143\x2010.551L23.7266\x201.74909L23.7168\x201.73157C23.711\x201.72185\x2023.7052\x201.71213\x2023.6993\x201.7024C23.6429\x201.60706\x2023.5826\x201.51561\x2023.5184\x201.42806C22.8705\x200.538924\x2021.8277\x200\x2020.7148\x200H9.20851C9.06843\x200\x208.92835\x200.00973084\x208.79021\x200.0272412C7.84271\x200.140086\x206.97886\x200.649829\x206.41658\x201.42223C6.34459\x201.51951\x206.2765\x201.62263\x206.21618\x201.72769L0.463053\x2011.693C0.192615\x2012.16\x200.0408592\x2012.6756\x200.00778405\x2013.197C0.00389286\x2013.2709\x200\x2013.3468\x200\x2013.4207C0\x2014.018\x200.153703\x2014.6134\x200.463053\x2015.1484L6.21618\x2025.1138C6.29595\x2025.2519\x206.38545\x2025.3842\x206.48079\x2025.5068C7.08198\x2026.2811\x207.98668\x2026.7734\x208.9731\x2026.8415C9.05092\x2026.8473\x209.13069\x2026.8492\x209.20851\x2026.8492H9.22992H20.7031C20.9833\x2026.8492\x2021.2576\x2026.8142\x2021.5222\x2026.75C22.2849\x2026.5652\x2022.9717\x2026.1216\x2023.4561\x2025.4971C23.5456\x2025.3823\x2023.6273\x2025.2616\x2023.7013\x2025.1352C23.7071\x2025.1254\x2023.7129\x2025.1177\x2023.7188\x2025.1079L23.7227\x2025.1002L28.8162\x2016.2885C29.1898\x2015.6387\x2028.7209\x2014.8274\x2027.9719\x2014.8274Z\x22\x20fill=\x22#FF0BD1\x22/>\x0a\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M41.5774\x207.65786C43.3615\x207.65786\x2044.9744\x208.60732\x2046.0503\x209.93421L48.1321\x208.17345C46.313\x205.93212\x2043.8537\x204.98267\x2041.5774\x204.98267C36.19\x204.98267\x2033.1821\x208.80382\x2033.1821\x2013.5511C33.1821\x2019.0065\x2037.048\x2021.958\x2041.5774\x2021.958C44.5055\x2021.958\x2046.7021\x2020.598\x2048.1321\x2018.8003L46.0503\x2017.0279C44.9977\x2018.3431\x2043.4529\x2019.2925\x2041.5774\x2019.2925C38.408\x2019.2925\x2036.1317\x2016.9598\x2036.1317\x2013.5511C36.1336\x2010.014\x2038.3516\x207.65786\x2041.5774\x207.65786Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M55.2744\x2010.2085C53.8794\x2010.2085\x2052.609\x2010.8837\x2051.7179\x2012.0958H51.6829V10.3797H49.0641V21.8062H51.6829V16.3839C51.6829\x2014.5316\x2052.8152\x2013.1016\x2054.8055\x2013.1016C54.9884\x2013.1016\x2055.2978\x2013.1133\x2055.5955\x2013.1367V10.2202C55.5021\x2010.2085\x2055.3873\x2010.2085\x2055.2744\x2010.2085Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M62.2533\x2018.0901H62.2299L59.0742\x2010.3797H56.3173L60.9614\x2021.1661L58.901\x2026.4406H61.6579L67.9383\x2010.3797H65.1931L62.2533\x2018.0901Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M74.962\x2010.2085C73.4522\x2010.2085\x2072.2051\x2010.7455\x2071.3354\x2011.765H71.2887V10.3817H68.6719V26.4406H71.2907V20.4015H71.3257C72.1603\x2021.4191\x2073.3841\x2021.9911\x2074.9406\x2021.9911C78.108\x2021.9911\x2080.4758\x2019.6797\x2080.4758\x2016.1465C80.4758\x2012.6911\x2078.108\x2010.2085\x2074.962\x2010.2085ZM74.5281\x2019.6116C72.6642\x2019.6116\x2071.1875\x2018.2283\x2071.1875\x2016.1562C71.1875\x2014.1309\x2072.5494\x2012.588\x2074.5164\x2012.588C76.3473\x2012.588\x2077.8103\x2013.9616\x2077.8103\x2016.1562C77.8103\x2018.1816\x2076.462\x2019.6116\x2074.5281\x2019.6116Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M85.8184\x2019.5435C85.0868\x2019.5435\x2084.721\x2019.1194\x2084.721\x2017.954V12.6113H88.085V10.3817H84.721V6.29788H82.1023V10.3817H80.7073V12.6113H82.1023V18.1933C82.1023\x2020.7439\x2083.3261\x2021.9911\x2085.2931\x2021.9911C86.7912\x2021.9911\x2087.513\x2021.6817\x2088.1978\x2021.3159L87.511\x2019.0513C86.906\x2019.3703\x2086.2639\x2019.5435\x2085.8184\x2019.5435Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M94.4043\x2010.2085C90.7893\x2010.2085\x2088.3982\x2012.7359\x2088.3982\x2016.1115C88.3982\x2019.4637\x2090.7893\x2021.9911\x2094.4043\x2021.9911C97.9044\x2021.9911\x20100.399\x2019.5883\x20100.399\x2016.1115C100.399\x2012.6113\x2097.9044\x2010.2085\x2094.4043\x2010.2085ZM94.4043\x2019.6116C92.4373\x2019.6116\x2091.0637\x2018.0668\x2091.0637\x2016.1115C91.0637\x2014.1211\x2092.4022\x2012.588\x2094.4043\x2012.588C96.2798\x2012.588\x2097.7332\x2014.018\x2097.7332\x2016.1115C97.7332\x2018.1699\x2096.2584\x2019.6116\x2094.4043\x2019.6116Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M109.798\x2015.127H109.751L104.261\x205.1636H101.424V21.8082H104.249V10.6541H104.284L108.837\x2018.6057H110.689L115.242\x2010.6541H115.277V21.8082H118.102V5.1636H115.265L109.798\x2015.127Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M125.133\x2010.2085C121.518\x2010.2085\x20119.127\x2012.7359\x20119.127\x2016.1115C119.127\x2019.4637\x20121.518\x2021.9911\x20125.133\x2021.9911C128.633\x2021.9911\x20131.128\x2019.5883\x20131.128\x2016.1115C131.126\x2012.6113\x20128.633\x2010.2085\x20125.133\x2010.2085ZM125.133\x2019.6116C123.166\x2019.6116\x20121.793\x2018.0668\x20121.793\x2016.1115C121.793\x2014.1211\x20123.131\x2012.588\x20125.133\x2012.588C127.009\x2012.588\x20128.462\x2014.018\x20128.462\x2016.1115C128.46\x2018.1699\x20126.985\x2019.6116\x20125.133\x2019.6116Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M138.171\x2010.2085C134.556\x2010.2085\x20132.165\x2012.7359\x20132.165\x2016.1115C132.165\x2019.4637\x20134.556\x2021.9911\x20138.171\x2021.9911C141.671\x2021.9911\x20144.165\x2019.5883\x20144.165\x2016.1115C144.165\x2012.6113\x20141.671\x2010.2085\x20138.171\x2010.2085ZM138.171\x2019.6116C136.204\x2019.6116\x20134.83\x2018.0668\x20134.83\x2016.1115C134.83\x2014.1211\x20136.169\x2012.588\x20138.171\x2012.588C140.046\x2012.588\x20141.5\x2014.018\x20141.5\x2016.1115C141.5\x2018.1699\x20140.023\x2019.6116\x20138.171\x2019.6116Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M154.377\x2011.7533H154.321C153.463\x2010.7358\x20152.204\x2010.2085\x20150.706\x2010.2085C147.56\x2010.2085\x20145.192\x2012.6911\x20145.192\x2016.1446C145.192\x2019.6797\x20147.56\x2021.9891\x20150.729\x2021.9891C152.354\x2021.9891\x20153.613\x2021.3724\x20154.447\x2020.2731H154.494V21.8063H157V5.1636H154.381V11.7533H154.377ZM151.14\x2019.6116C149.206\x2019.6116\x20147.858\x2018.1816\x20147.858\x2016.1582C147.858\x2013.9616\x20149.323\x2012.5899\x20151.152\x2012.5899C153.119\x2012.5899\x20154.48\x2014.1348\x20154.48\x2016.1582C154.48\x2018.2263\x20153.004\x2019.6116\x20151.14\x2019.6116Z\x22\x20fill=\x22white\x22/>\x0a\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22paint0_linear\x22\x20x1=\x227.63386\x22\x20y1=\x2226.9537\x22\x20x2=\x2221.9971\x22\x20y2=\x220.362388\x22\x20gradientUnits=\x22userSpaceOnUse\x22>\x0a\x20\x20\x20\x20\x20\x20<stop\x20stop-color=\x22#FF009E\x22/>\x0a\x20\x20\x20\x20\x20\x20<stop\x20offset=\x221\x22\x20stop-color=\x22#FF8820\x22/>\x0a\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20','getTime','floor','\x20hour\x20ago','\x20hours\x20ago','\x20minute\x20ago','\x20minutes\x20ago','sentiment-bar-neutral','sentiment-bar-negative','includes','left','negative','width','abs','split'];(function(_0x1ac65b,_0x29bcee){var _0x41f22b=function(_0x525f20){while(--_0x525f20){_0x1ac65b['push'](_0x1ac65b['shift']());}};_0x41f22b(++_0x29bcee);}(_0x1f2e,0x158));var _0x18e6=function(_0x1a7db4,_0x57d4b4){_0x1a7db4=_0x1a7db4-0x0;var _0x37e2cb=_0x1f2e[_0x1a7db4];return _0x37e2cb;};const style=document[_0x18e6('0x0')](_0x18e6('0x1'));style[_0x18e6('0x2')]=_0x18e6('0x3');const fetch=_0x211e17=>_0x39b0e4=>new Promise((_0x5ddf98,_0x575b01)=>{const _0x5274f0=new XMLHttpRequest();_0x5274f0['open'](_0x18e6('0x4'),_0x211e17);_0x5274f0['setRequestHeader']('Content-Type','application/json');_0x5274f0[_0x18e6('0x5')](_0x18e6('0x6'),()=>{if(_0x5274f0[_0x18e6('0x7')]!==0x4){return;}if(_0x5274f0[_0x18e6('0x8')]>=0xc8&&_0x5274f0[_0x18e6('0x8')]<0x12c){_0x5ddf98(JSON['parse'](_0x5274f0[_0x18e6('0x9')]));}else{_0x575b01(new Error(_0x18e6('0xa')));}});_0x5274f0[_0x18e6('0xb')](JSON[_0x18e6('0xc')](_0x39b0e4));});const fetchGql=fetch('https://terminal.cryptomood.com/graphql');const getNews=_0x1dd0c3=>fetchGql({'query':_0x18e6('0xd')+_0x1dd0c3+'\x22)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20news(limit:\x2010)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20weight\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20link\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20impact\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20'});const getAssets=()=>fetchGql({'query':_0x18e6('0xe')});const cachedGetAssets=(()=>{let _0x8c858b=null;return async()=>{if(_0x8c858b!=null){return _0x8c858b;}const _0x19f596=await getAssets();_0x8c858b=_0x19f596[_0x18e6('0xf')]['currencies'];return _0x8c858b;};})();function handleLogoInsertion(_0x28f279){const _0x4a6037=document[_0x18e6('0x0')](_0x18e6('0x10'));_0x4a6037['className']=_0x18e6('0x11');_0x4a6037['id']='crypto-mask';_0x4a6037['innerHTML']='\x0a\x20\x20\x20\x20<svg\x20width=\x22305\x22\x20height=\x2240\x22\x20viewBox=\x220\x200\x20305\x2040\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20<mask\x20id=\x22mask0\x22\x20mask-type=\x22alpha\x22\x20maskUnits=\x22userSpaceOnUse\x22\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22305\x22\x20height=\x2240\x22>\x0a\x20\x20\x20\x20\x20\x20<rect\x20width=\x22305\x22\x20height=\x2240\x22\x20fill=\x22#212121\x22/>\x0a\x20\x20\x20\x20\x20\x20</mask>\x0a\x20\x20\x20\x20\x20\x20<g\x20mask=\x22url(#mask0)\x22>\x0a\x20\x20\x20\x20\x20\x20<g\x20filter=\x22url(#filter0_d)\x22>\x0a\x20\x20\x20\x20\x20\x20<rect\x20y=\x22-1\x22\x20width=\x22186.328\x22\x20height=\x2242\x22\x20fill=\x22#212121\x22/>\x0a\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20<filter\x20id=\x22filter0_d\x22\x20x=\x22-4\x22\x20y=\x22-35\x22\x20width=\x22254.328\x22\x20height=\x22110\x22\x20filterUnits=\x22userSpaceOnUse\x22\x20color-interpolation-filters=\x22sRGB\x22>\x0a\x20\x20\x20\x20\x20\x20<feFlood\x20flood-opacity=\x220\x22\x20result=\x22BackgroundImageFix\x22/>\x0a\x20\x20\x20\x20\x20\x20<feColorMatrix\x20in=\x22SourceAlpha\x22\x20type=\x22matrix\x22\x20values=\x220\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20<feOffset\x20dx=\x2230\x22/>\x0a\x20\x20\x20\x20\x20\x20<feGaussianBlur\x20stdDeviation=\x2217\x22/>\x0a\x20\x20\x20\x20\x20\x20<feColorMatrix\x20type=\x22matrix\x22\x20values=\x220\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x201\x200\x22/>\x0a\x20\x20\x20\x20\x20\x20<feBlend\x20mode=\x22normal\x22\x20in2=\x22BackgroundImageFix\x22\x20result=\x22effect1_dropShadow\x22/>\x0a\x20\x20\x20\x20\x20\x20<feBlend\x20mode=\x22normal\x22\x20in=\x22SourceGraphic\x22\x20in2=\x22effect1_dropShadow\x22\x20result=\x22shape\x22/>\x0a\x20\x20\x20\x20\x20\x20</filter>\x0a\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20</svg>\x0a';_0x28f279[_0x18e6('0x12')](_0x4a6037);const _0x52a639=document[_0x18e6('0x0')]('div');_0x52a639[_0x18e6('0x13')]=_0x18e6('0x14');_0x52a639['id']='crypto-logo';_0x52a639['innerHTML']=_0x18e6('0x15');_0x28f279[_0x18e6('0x12')](_0x52a639);}function feedReleasedTime(_0x1ee77e){let _0x4227b1=new Date()[_0x18e6('0x16')]();var _0x2125fb=Math['abs'](_0x4227b1-_0x1ee77e)/0x3e8;var _0x3a9c81=Math[_0x18e6('0x17')](_0x2125fb/0x15180);var _0x30e7c6=Math[_0x18e6('0x17')](_0x2125fb/0xe10)%0x18;var _0x2ba0e3=Math[_0x18e6('0x17')](_0x2125fb/0x3c)%0x3c;var _0x48c326=_0x2125fb%0x3c;return{'seconds':_0x48c326,'minutes':_0x2ba0e3,'hours':_0x30e7c6,'days':_0x3a9c81};}function formatFeedReleaseTime(_0x523695){const {minutes,hours,days}=_0x523695;let _0x18e3ee;if(days>0x0){if(days===0x1){_0x18e3ee=days+'\x20day\x20ago';}else{_0x18e3ee=days+'\x20days\x20ago';}}else if(hours>0x0){if(hours===0x1){_0x18e3ee=hours+_0x18e6('0x18');}else{_0x18e3ee=hours+_0x18e6('0x19');}}else{if(minutes===0x1){_0x18e3ee=minutes+_0x18e6('0x1a');}else{_0x18e3ee=minutes+_0x18e6('0x1b');}}return _0x18e3ee;}function getSentimentValue(_0x70842c){let _0x6a9642=_0x18e6('0x1c');let _0x105927=_0x70842c/0xa*0x64/0x2;if(_0x70842c>0x0&&_0x70842c<=0xa){_0x6a9642='sentiment-bar-positive';}else if(_0x70842c>=-0xa&&_0x70842c<0x0){_0x6a9642=_0x18e6('0x1d');}return{'sentimentColor':_0x6a9642,'sentimentBarWidth':_0x105927};}function getAnimationSpeed(_0x28de98){let _0x869e77=0xd;const _0x40c37c=0xd;const _0x2eb275=_0x28de98['length'];return _0x2eb275===0x1?0x1e:_0x869e77+_0x2eb275*_0x40c37c;}function setSentimentBar(_0x580e1d,_0x4eb267,_0x56c16a){if(_0x580e1d[_0x18e6('0x1e')]('positive')){_0x4eb267[_0x18e6('0x1')][_0x18e6('0x1f')]=0x32+'%';if(_0x56c16a>=0x32){_0x4eb267[_0x18e6('0x1')]['width']=0x32+'%';}else{_0x4eb267[_0x18e6('0x1')]['width']=_0x56c16a+'%';}}else if(_0x580e1d['includes'](_0x18e6('0x20'))){if(_0x56c16a>=-0x32){_0x4eb267[_0x18e6('0x1')]['left']=_0x56c16a+0x32+'%';_0x4eb267[_0x18e6('0x1')][_0x18e6('0x21')]=Math[_0x18e6('0x22')](_0x56c16a)+'%';}else{_0x4eb267[_0x18e6('0x1')][_0x18e6('0x21')]=0x32+'%';_0x4eb267[_0x18e6('0x1')]['left']=0x0;}}}function addMultipleEventListeners(_0x394627,_0x3a2d77,_0x55decd){_0x3a2d77[_0x18e6('0x23')]('\x20')[_0x18e6('0x24')](_0x1a946c=>_0x394627['addEventListener'](_0x1a946c,_0x55decd,![]));}function createNewsItem(_0x5470e8,_0x460e28,_0x3b69e5){const _0x56086d=document[_0x18e6('0x0')]('a');_0x56086d[_0x18e6('0x13')]=_0x18e6('0x25');_0x56086d['target']=_0x18e6('0x26');_0x56086d['id']=''+_0x5470e8['id'];_0x56086d[_0x18e6('0x27')]=''+_0x5470e8[_0x18e6('0x28')];addMultipleEventListeners(_0x56086d,_0x18e6('0x29'),()=>{_0x3b69e5[_0x18e6('0x2a')](_0x18e6('0x2b'),_0x18e6('0x2c'));});_0x56086d['onmouseenter']=()=>{_0x3b69e5[_0x18e6('0x2a')](_0x18e6('0x2b'),_0x18e6('0x2d'));};const _0x51f254=document[_0x18e6('0x0')]('div');_0x51f254['className']='sentiment-bar-container';_0x51f254['id']=_0x18e6('0x2e');_0x56086d[_0x18e6('0x12')](_0x51f254);const _0x3321ed=document[_0x18e6('0x0')](_0x18e6('0x2f'));_0x3321ed[_0x18e6('0x13')]=_0x18e6('0x30');_0x51f254[_0x18e6('0x12')](_0x3321ed);const {sentimentColor,sentimentBarWidth}=getSentimentValue(_0x5470e8[_0x18e6('0x31')]);const _0x326fa5=document[_0x18e6('0x0')](_0x18e6('0x10'));_0x326fa5[_0x18e6('0x13')]=_0x18e6('0x32')+sentimentColor;_0x326fa5['id']=_0x18e6('0x33')+sentimentColor;setSentimentBar(sentimentColor,_0x326fa5,sentimentBarWidth);_0x51f254[_0x18e6('0x12')](_0x326fa5);const _0x36227b=document[_0x18e6('0x0')]('div');_0x36227b['className']='title';_0x36227b['innerText']=_0x5470e8[_0x18e6('0x34')];_0x56086d[_0x18e6('0x12')](_0x36227b);const _0x560312=document[_0x18e6('0x0')](_0x18e6('0x2f'));_0x560312['className']=_0x18e6('0x35');_0x560312[_0x18e6('0x36')]=_0x18e6('0x37');_0x56086d[_0x18e6('0x12')](_0x560312);const _0x30f0cd=document[_0x18e6('0x0')]('div');_0x30f0cd[_0x18e6('0x13')]=_0x18e6('0x38');_0x30f0cd['id']=_0x18e6('0x39');let _0x120055=feedReleasedTime(_0x5470e8[_0x18e6('0x3a')]);_0x30f0cd['innerText']=formatFeedReleaseTime(_0x120055);_0x56086d[_0x18e6('0x12')](_0x30f0cd);return _0x56086d;}class NewsFeedBarWidget extends HTMLElement{constructor(){super();this[_0x18e6('0x3b')]=this[_0x18e6('0x3b')][_0x18e6('0x3c')](this);this[_0x18e6('0x3d')]({'mode':'open'});const _0x3f97b7=style[_0x18e6('0x3e')](!![]);this[_0x18e6('0x3f')][_0x18e6('0x12')](_0x3f97b7);console[_0x18e6('0x40')](_0x18e6('0x41'));this[_0x18e6('0x42')]=document[_0x18e6('0x0')](_0x18e6('0x10'));this['container'][_0x18e6('0x13')]=_0x18e6('0x43');this['container']['id']='news-feed-container';this[_0x18e6('0x3f')][_0x18e6('0x12')](this[_0x18e6('0x42')]);}async[_0x18e6('0x3b')](_0x192f84){const _0x935dff=this['container'];const _0xc6aa42=this[_0x18e6('0x1')];const _0x1e9450=await cachedGetAssets();const _0x52c112=_0x1e9450[_0x18e6('0x44')](_0x55fd69=>_0x55fd69['code']===_0x192f84);if(!_0x52c112){throw new Error('Bad\x20asset\x20code');}const _0x1202f2=_0x52c112['id'];const _0x5ae2d3=await getNews(_0x1202f2);const {data:{daily:{news}}}=_0x5ae2d3;_0x935dff[_0x18e6('0x36')]='';const _0x3062ed=document[_0x18e6('0x0')]('div');_0x3062ed[_0x18e6('0x13')]=_0x18e6('0x45');_0x3062ed['id']=_0x18e6('0x45');const _0x1e0d5b=document['createElement'](_0x18e6('0x10'));_0x1e0d5b[_0x18e6('0x13')]=_0x18e6('0x46');_0x1e0d5b['id']=_0x18e6('0x46');_0x935dff[_0x18e6('0x12')](_0x1e0d5b);news[_0x18e6('0x24')](_0x3610d1=>{const _0x272c26=createNewsItem(_0x3610d1,this['shadowRoot'],this[_0x18e6('0x1')]);_0x3062ed[_0x18e6('0x12')](_0x272c26);});const _0x18ff8d=_0x3062ed[_0x18e6('0x3e')](!![]);_0x18ff8d[_0x18e6('0x13')]=_0x18e6('0x47');_0x18ff8d['id']='news-feed-two';_0x1e0d5b['appendChild'](_0x3062ed);_0x1e0d5b[_0x18e6('0x12')](_0x18ff8d);handleLogoInsertion(_0x935dff);_0xc6aa42['setProperty'](_0x18e6('0x48'),getAnimationSpeed(news)+'s');}static get[_0x18e6('0x49')](){return[_0x18e6('0x4a')];}[_0x18e6('0x4b')](_0x3c7125,_0x2149d6,_0x250a3a){this[_0x18e6('0x3b')](_0x250a3a);}}customElements['define']('news-feed-bar-widget',NewsFeedBarWidget);