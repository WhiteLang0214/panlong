import { Button } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
function Comp() {
  return(
    <div>
      <Button type="primary">按钮</Button>
      <UpCircleOutlined style={{color: 'red'}} />
    </div>
  )
}

export default Comp