import 'package:perspective/constants/color.dart';
import 'package:perspective/constants/textstyle.dart';
import 'package:perspective/screens/auth/trouble_login/login_by_email_screen.dart';
import 'package:perspective/utils/widgets/widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AccountRecoveryScreen extends StatelessWidget {
  const AccountRecoveryScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorConst.white,
      body: Column(
        children: [
          AppBarDesign(),
          Text(
            "Account Recovery",
            style: TextStyleClass.interBold(
              size: 28.0,
            ),
          ),
          SizedBox(
            height: 22.0,
          ),
          Text(
            '''Changed your phone number,
or lost access to your Facebook
Account? We can help you log in
with your email.''',
            textAlign: TextAlign.center,
            style: TextStyleClass.interRegular(
              size: 18.0,
              color: ColorConst.grey69,
            ),
          ),
          Spacer(),
          CommonButton(
            onTap: () {
              Get.to(() => LoginByEmailScreen());
            },
            title: "Login With Email",
          ),
          SizedBox(
            height: 185.0,
          ),
        ],
      ),
    );
  }
}
