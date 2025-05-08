---
layout: base
title: Uploading Images Procedure
menu: nav/mainHeader.html
---

```markdown
![Uploading Images Procedure]({{site.baseurl}}/assets/img/imgupload.png)
```

Our model, the one in the upper part of the image, is more effective because it gives updates as the images are being uploaded to the S3 server. The other, more standard model is less efficient because the upload could fail and you wouldn't be able to tell, while ours would display failed. Our server uses an asynchronous function to more efficiently handle the data.