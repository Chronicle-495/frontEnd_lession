jquery��װ��ajax
```javascript
$.ajax({
    type: "get/post", // ����ķ�ʽ
    url: "xxx", // ����ӿ� ����ĵ�ַ
    data: { // ���͸���̨���ӿڣ������ݣ�û�в��µ�ʱ����Ժ���
        ��̨���յı���: ǰ�δ��ݵ�ֵ
    },
    dataType: "json/xml/text/html/js", // ���ص��������� JSON.parse, Ҳ����ʡ��, ������������
    async: "true",  // �Ƿ��첽, Ĭ����true
    success: function (data) { // �ɹ��Ļص�����
        // data: ��̨���ص�����
    },
    error: function (err) { // ʧ�ܵĻص�����
        // err: ������Ϣ
    },
    beforeSend: function () { // ��������֮ǰִ�еĻص�����
    },
    complete: function () { // ���ܳɹ�����ʧ�ܶ���ִ�еĻص�����
    }
})
```

