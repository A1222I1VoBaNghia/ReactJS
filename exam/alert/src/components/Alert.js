import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Alert extends Component{
    render() {
        return (
            <div class="alert alert-warning" role="alert">
                Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
            </div>
        );
    }
}
export default Alert;