1.  npm init    ��ʼ����Ŀ�ļ�,
������Ŀ����, �汾��, ����, ����ļ�,
��������, git�ֿ�, �ؼ���, ����, ���֤,
���� yes ȷ��, ����package.json�ļ�

2. ES6 ת��Ϊ ES5, ʹ��babel,
https://babel.dev/, ����, ���ĵ�, ѡPresets�鿴��׼,
����Ŀ���½�.babelrc�ļ�, ����ת���׼
{
  "presets": []
}
��װbabel, npm i babel-preset-env --save-dev, �������й���Ĺ���(�Ƽ�)
--save-dev �ǰ�װ�ڱ��ļ���, ���ܻ��һЩ���治������ν, ��װ��, package.json�����
"devDependencies": {
    "babel-preset-env": "^1.7.0"
 }
 "babel-preset-env" ������.babelrc�ļ���presets������
��������װbabel-cli, npm i babel-cli --save-dev
package.json, ����babel-cli˵����װ�ɹ�.
��package��scripts�������½�"build": "babel app.js -o bundle.js"
��˼��babel app.jsת��app.js�ļ�, -o bundle.js�����bundle.js�ļ���
���������� npm run build, ������Ŀ�ļ���������bundle.js�ļ�, ������ת���Ĵ���
bundle.js�ͳ�����(-o��ȫ���� --out-file)
---------------------------------------------
���� babel src -d lib, ���src�ļ����µ������ļ�ת�뵽lib�ļ�����
��package.json��script�м���"script-name": "babel-node ./app.js",
���������� npm run script-name, ���ɳɹ�������
�������Ҳ����nodeִ��, ���������ļ���, ����node app.js, ����������
Ҳ����idea�Դ��ն�, �������ļ����Ҽ�, ѡ��run, Ҳ����������
babel register�����Զ�ת��,
babel coreת����庯��, ����Ҫ����, ES2015����ES6
ES6��api���ᱻת��, Ҫ��babel-polyfill���ת��, ����ģ��
require��import����
��ʵ��ЩҲ�����ù���������ת����, ���������������
�����, ����text/babel + CDN�ķ�ʽ�����壬�⽫������js
��һ��ת����traceur, �õ���