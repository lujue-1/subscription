import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdcar.jch',
  name: '京东养车',
  groups: [
    {
      key: 1,
      name: '跳过开屏和会员权益',
      desc: '开屏跳过点击×',
      rules: [
      {
          matches: '[id="com.jdcar.jch:id/img_close"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1704246534328',    
          ],
       },
       {
          matches: '[id="com.jdcar.jch:id/tv_jump_2"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1704246508144',
          ],
       },
      ],
    },
  ],
});
