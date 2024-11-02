            /* <Product-script> */
            let list = [];
            let listbi = [];
            let amount = 0;
            let amount1 = 0;
            let amount2 = 0;
            let amount3 = 0;
            let amount4 = 0;
            let amount5 = 0;
            let amount6 = 0;
            let amount7 = 0;
            let price = 0;
            function addtolist() {
                amount++;
                price = price + 1.000;
                if (listbi.indexOf(" 0000 0001") == -1) {
                    list = list + ["Block of your choice in the server of your choice"];
                    listbi = listbi + [" 0000 0001"];
                }
                document.getElementById("amount").innerHTML = amount;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist1() {
                if (amount1 < 2) {
                    amount1++;
                    price = price + 2.000;
                }
                else {
                    alert("You cannot add more of this product, you already have the maximum amount.")
                }
                if (listbi.indexOf(" 0000 0010") == -1) {
                    list = list + ["World Seed of server of your choice"];
                    listbi = listbi + [" 0000 0010"];
                }
                document.getElementById("amount1").innerHTML = amount1;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist2() {
                amount2++;
                price = price + 1.000;
                if (listbi.indexOf(" 0000 0011") == -1) {
                    list = list + ["Legal item of your choice in the server of your choice"];
                    listbi = listbi + [" 0000 0011"];
                }
                document.getElementById("amount2").innerHTML = amount2;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist3() {
                amount3++;
                price = price + 6.000;
                if (listbi.indexOf(" 0000 0100") == -1) {
                    list = list + ["Illegal item of your choice in the server of your choice"];
                    listbi = listbi + [" 0000 0100"];
                }
                document.getElementById("amount3").innerHTML = amount3;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist4() {
                amount4++;
                price = price + 10.000;
                if (listbi.indexOf(" 0000 0101") == -1) {
                    list = list + ["Ore blocks/items of your choice in server of your choice"];
                    listbi = listbi + [" 0000 0101"];
                }
                document.getElementById("amount4").innerHTML = amount4;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist5() {
                amount5++;
                price = price + 3.000;
                if (listbi.indexOf(" 0000 0110") == -1) {
                    list = list + ["Tools of your choice in server of your choice"];
                    listbi = listbi + [" 0000 0110"];
                }
                document.getElementById("amount5").innerHTML = amount5;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist6() {
                amount6++;
                price = price + 3.000;
                if (listbi.indexOf(" 0000 0111") == -1) {
                    list = list + ["Potions of your choice in server of your choice"];
                    listbi = list + [" 0000 0111"];
                }
                document.getElementById("amount6").innerHTML = amount6;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function addtolist7() {
                amount7++;
                price = price + 3.000;
                if (listbi.indexOf(" 0000 1000") == -1) {
                    list = list + ["Books of your choice in server of your choice"];
                    listbi = listbi + [" 0000 1000"];
                }
                document.getElementById("amount7").innerHTML = amount7;
                document.getElementById("price").innerHTML = price + ".000 KWD";
            }
            function reset() {
                list = [" "];
                listbi = [" "];
                amount = 0;
                amount1 = 0;
                amount2 = 0;
                amount3 = 0;
                amount4 = 0;
                amount5 = 0;
                amount6 = 0;
                amount7 = 0;
                price = 0.000;
                document.getElementById("amount").innerHTML = amount;
                document.getElementById("amount1").innerHTML = amount1;
                document.getElementById("amount2").innerHTML = amount2;
                document.getElementById("amount3").innerHTML = amount3;
                document.getElementById("amount4").innerHTML = amount4;
                document.getElementById("amount5").innerHTML = amount5;
                document.getElementById("amount6").innerHTML = amount6;
                document.getElementById("amount7").innerHTML = amount7;
                document.getElementById("price").innerHTML = price;
            }
            /* List script*/
            function addlist() {
                if (listbi.indexOf(" 0000 0001") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 0010") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount1 + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 0011") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount2 + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 0100") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount3 + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 0101") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount4 + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 0110") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount5 + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 0111") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount6 + "- " + list[0] + "\n";
                }
                if (listbi.indexOf(" 0000 1000") == -1) {
                    document.getElementById("il").innerHTML = innerHTML + amount7 + "- " + list[0] + "\n";
                }
                else {
                    document.getElementById("il").innerHTML = "";
                }
                alert(list);
                alert(listbi);
            }
            /* </Product-script> */

            /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
            function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            };
            /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
            function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            };
