import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
interface Policy {
  title: string;
  content: string;
}

@Component({
  selector: 'app-chinhsach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chinhsach.component.html',
  styleUrl: './chinhsach.component.css',
})
export class ChinhsachComponent implements OnInit {
  policies: Policy[] = [
    {
      title: 'Chính sách vận chuyển',
      content: `
      <p>Chính sách vận chuyển của AMBRO cam kết mang đến dịch vụ giao hàng nhanh chóng và an toàn cho khách hàng. Dưới đây là các thông tin chi tiết về quy trình và điều kiện giao hàng:</p>
      <ul>
        <li><strong>1. Cước phí vận chuyển</strong><br>Miễn phí giao hàng với tất cả các đơn có khối lượng từ 7kg trở lên tại tất cả các tỉnh thành trên toàn quốc. Đối với những đơn hàng có khối lượng dưới 7kg, áp dụng phí ship 35.000 VNĐ.</li>
        <br>
        <li><strong>2. Thời gian vận chuyển</strong><br>Hàng sẽ được giao đến tay bạn sớm nhất sau khi đơn hàng được xác nhận đặt hàng thành công tùy theo khu vực nhận hàng hoặc tình hình khách quan (dịch bệnh, thời tiết, lũ lụt). Thời gian giao hàng không tính thứ bảy, chủ nhật hay các ngày lễ tết.</li>
        <br>
        <li><strong>3. Phương thức giao hàng</strong><br>Giao hàng tận nơi: Nhân viên giao hàng sẽ giao sản phẩm trực tiếp đến tay khách hàng.</li>
        <br>
        <li><strong>4. Kiểm tra đơn hàng khi nhận</strong><br>Khách hàng nên kiểm tra bao bì và sản phẩm ngay khi nhận hàng. Nếu phát hiện vấn đề, khách hàng có quyền từ chối nhận hàng và thông báo cho chúng tôi ngay.</li>
        <br>
        <li><strong>5. Chính sách đổi trả</strong><br>Trong trường hợp sản phẩm bị hư hỏng do vận chuyển, vui lòng liên hệ ngay với chúng tôi để được hỗ trợ đổi trả.</li>
      </ul>
      <br>
      <div class="policy-contact">
        Nếu có câu hỏi về chính sách vận chuyển, xin vui lòng liên hệ:<br>
        Hotline: <a href="tel:0905036273">0905-036-273</a><br>
        Email: <a href="mailto:ambroeatclean@gmail.com">ambroeatclean@gmail.com</a>
      </div>
    `,
    },
    {
      title: 'Chính sách kiểm hàng',
      content: `<p>Chúng tôi hiểu rằng việc kiểm tra hàng hóa trước khi nhận giúp đảm bảo quyền lợi và sự hài lòng cao nhất cho khách hàng khi mua sắm các sản phẩm eatclean. Vì vậy, chính sách kiểm hàng của AMBRO được xây dựng nhằm giúp khách hàng yên tâm và tin tưởng vào sản phẩm và dịch vụ của chúng tôi.</p>
      <br>
        <ul>
          <li><strong>1. Phạm vi áp dụng:</strong> Chính sách kiểm hàng áp dụng cho tất cả các sản phẩm eatclean được bán và giao đến khách hàng thông qua AMBRO. Khách hàng có quyền kiểm tra hàng trước khi thanh toán hoặc trước khi xác nhận hoàn tất giao dịch.</li>
          <br>
          <li><strong>2. Quyền lợi kiểm hàng của khách hàng:</strong> 
            <ul>
              <li>Tình trạng bên ngoài của sản phẩm: Bao gồm bao bì nguyên vẹn, không bị rách, không có dấu hiệu hư hỏng.</li>
              <li>Ngày sản xuất và hạn sử dụng: Đảm bảo rằng sản phẩm còn hạn sử dụng đầy đủ.</li>
              <li>Đúng với thông tin đặt hàng: Kiểm tra số lượng, loại sản phẩm, khối lượng, và các yêu cầu đặc biệt.</li>
            </ul>
          </li>
          <br>
          <li><strong>3. Quy trình kiểm hàng khi nhận sản phẩm:</strong>
            <ul>
              <li>Bước 1: Kiểm tra bao bì bên ngoài.</li>
              <li>Bước 2: Mở bao bì và kiểm tra tình trạng sản phẩm.</li>
              <li>Bước 3: Nếu phát hiện vấn đề, vui lòng liên hệ ngay với chúng tôi qua hotline.</li>
            </ul>
          </li>
          <br>
          <li><strong>4. Chính sách kiểm hàng:</strong> Khách hàng nên kiểm tra sản phẩm ngay khi nhận và thông báo ngay khi phát hiện vấn đề.</li>
          <br>
          <li><strong>5. Điều kiện từ chối kiểm hàng:</strong>
            <ul>
              <li>Sản phẩm có bao bì niêm phong đặc biệt.</li>
              <li>Sản phẩm ăn uống dễ hư hỏng nhanh.</li>
            </ul>
          </li>
          <br>
          <li><strong>6. Hướng dẫn giải quyết khi có vấn đề khi kiểm hàng:</strong>
            <ul>
              <li>Bước 1: Ghi nhận vấn đề bằng cách chụp ảnh.</li>
              <li>Bước 2: Liên hệ với chúng tôi qua số hotline.</li>
              <li>Bước 3: Đội ngũ chăm sóc khách hàng sẽ xem xét và phản hồi trong vòng 24 giờ.</li>
            </ul>
          </li>
        </ul>
        <br>
        <div class="policy-contact">
          Hotline: <a href="tel:0905036273">0905-036-273</a><br>
          Email: <a href="mailto:ambroeatclean@gmail.com">ambroeatclean@gmail.com</a>
        </div>
`,
    },

    {
      title: 'Hướng dẫn đặt hàng',
      content: ` <p>Chào mừng bạn đến với trang web của AMBRO! Dưới đây là hướng dẫn từng bước để bạn dễ dàng đặt hàng và trải nghiệm mua sắm trực tuyến.</p>
      <br>
        <ul>
          <li><strong>Bước 1: Truy cập website</strong><br>Mở trình duyệt web và nhập địa chỉ website của chúng tôi: [Địa chỉ website].</li>
          
          <li><strong>Bước 2: Chọn sản phẩm</strong><br>Bạn có thể tìm kiếm sản phẩm theo danh mục hoặc sử dụng thanh tìm kiếm để tìm sản phẩm cụ thể. Nhấp vào sản phẩm để xem thông tin chi tiết.</li>
          <li><strong>Bước 3: Thêm sản phẩm vào giỏ hàng</strong><br>Chọn số lượng sản phẩm bạn muốn mua và nhấn nút “Thêm vào giỏ hàng”. Nếu bạn chọn “Mua ngay”, bạn sẽ chuyển thẳng đến trang thanh toán (Bước 5).</li>
          <li><strong>Bước 4: Kiểm tra giỏ hàng</strong><br>Nhấp vào biểu tượng giỏ hàng ở góc trên để xem sản phẩm đã chọn. Nhấn nút “Thanh toán” để tiếp tục.</li>
          <li><strong>Bước 5: Nhập thông tin địa chỉ</strong><br>Nhập thông tin cá nhân của bạn, bao gồm họ tên, địa chỉ giao hàng, số điện thoại và email.</li>
          <li><strong>Bước 6: Chọn phương thức thanh toán</strong><br>Chọn thanh toán khi nhận hàng hoặc thanh toán trực tuyến qua thẻ tín dụng hoặc ví điện tử.</li>
          <li><strong>Bước 7: Xác nhận đặt hàng</strong><br>Xem lại thông tin đơn hàng, nhấn nút “Xác nhận đặt hàng” để hoàn tất.</li>
          <li><strong>Bước 8: Nhận thông báo đơn hàng</strong><br>Sau khi đặt hàng thành công, bạn sẽ nhận được email xác nhận.</li>
          <li><strong>Bước 9: Theo dõi đơn hàng</strong><br>Sau khi hoàn tất thanh toán, bạn có thể theo dõi tình trạng đơn hàng qua tài khoản của mình trên website.</li>
        </ul>
        <br>
        <div class="policy-contact">
          Hotline: <a href="tel:0905036273">0905-036-273</a><br>
          Email: <a href="mailto:ambroeatclean@gmail.com">ambroeatclean@gmail.com</a>
        </div>
`,
    },

    {
      title: 'Chính sách đổi trả',
      content: `
        <p>Tại AMBRO, chúng tôi cam kết mang đến cho quý khách hàng các sản phẩm ăn uống chất lượng cao và dịch vụ chăm sóc khách hàng chu đáo. Vì vậy, chúng tôi đã xây dựng chính sách đổi trả để đảm bảo quyền lợi tốt nhất cho khách hàng.</p>
        <br>
        <ul>
          <li><strong>1. Điều kiện đổi trả sản phẩm</strong><br>
    
            Chúng tôi chấp nhận đổi trả sản phẩm trong các trường hợp sau:<br>
            - Sản phẩm bị lỗi hoặc hư hỏng trong quá trình sản xuất.<br>
            - Sản phẩm không đúng với đơn đặt hàng.<br>
            - Sản phẩm hết hạn sử dụng.<br>
            Lưu ý: Chúng tôi không chấp nhận đổi trả nếu sản phẩm bị hư hỏng do bảo quản không đúng cách từ phía khách hàng.
          </li>
          <br>
          <li><strong>2. Thời gian đổi trả</strong><br>
            Quý khách vui lòng liên hệ với chúng tôi trong vòng 24 giờ kể từ thời điểm nhận hàng.
          </li>
          <br>
          <li><strong>4. Quy trình đổi trả sản phẩm</strong><br>
            Bước 1: Liên hệ với chúng tôi qua hotline hoặc email và cung cấp thông tin đơn hàng.<br>
            Bước 2: Bộ phận chăm sóc khách hàng sẽ xác nhận yêu cầu đổi trả.<br>
            Bước 3: Nếu đáp ứng điều kiện, chúng tôi sẽ hẹn ngày và phương thức nhận lại sản phẩm.<br>
            Bước 4: Sau khi nhận lại sản phẩm lỗi, chúng tôi sẽ gửi sản phẩm mới hoặc hoàn lại số tiền tương ứng.
          </li>
          <br>
          <li><strong>5. Phí đổi trả sản phẩm</strong><br>
            Đối với sản phẩm lỗi hoặc giao nhầm: Chúng tôi chịu mọi chi phí đổi trả, bao gồm phí vận chuyển.<br>
            Đối với các lý do cá nhân: Khách hàng chịu phí vận chuyển lại nếu lý do đổi trả xuất phát từ thay đổi ý định.
          </li>
          <br>
          <li><strong>6. Hoàn tiền trong trường hợp không thể đổi sản phẩm</strong><br>
            Nếu sản phẩm không còn hàng, chúng tôi sẽ hoàn tiền vào tài khoản ngân hàng hoặc ví điện tử của khách hàng trong vòng 3-7 ngày làm việc.
          </li>
          <br>
          <li><strong>7. Lưu ý khi đổi trả sản phẩm</strong><br>
            - Khách hàng cần giữ nguyên bao bì, tem nhãn và hóa đơn mua hàng.<br>
            - Sản phẩm phải còn nguyên vẹn và chưa qua sử dụng khi gửi đổi trả.<br>
            - Đối với sản phẩm khuyến mãi, chúng tôi có thể áp dụng điều kiện đổi trả đặc biệt.
          </li>
      
        </ul>
        <br>
        <div class="policy-contact">
          Hotline: <a href="tel:0905036273">0905-036-273</a><br>
          Email: <a href="mailto:ambroeatclean@gmail.com">ambroeatclean@gmail.com</a>
        </div>
      `,
    },
  ];

  selectedPolicy: Policy | null = null;
  // selectedPolicy: Policy | null = null;

  ngOnInit() {
    // Gán null nếu không tìm thấy chính sách

    this.selectedPolicy =
      this.policies.find(
        (policy) => policy.title === 'Chính sách vận chuyển'
      ) ?? null;
  }

  // selectPolicy(policy: Policy) {
  //   this.selectedPolicy = policy;
  // }

  selectPolicy(policy: any) {
    this.selectedPolicy = policy;
  }
}
