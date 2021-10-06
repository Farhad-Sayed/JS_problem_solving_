var money = parseFloat(readline());
money = money * 100;

print('NOTAS:');
print(Math.floor(money/10000) + ' nota(s) de R$ 100.00');
money = money % 10000;
print(Math.floor(money/5000) + ' nota(s) de R$ 50.00');
money = money % 5000;
print(Math.floor(money/2000) + ' nota(s) de R$ 20.00');
money = money % 2000;
print(Math.floor(money/1000) + ' nota(s) de R$ 10.00');
money = money % 1000;
print(Math.floor(money/500) + ' nota(s) de R$ 5.00');
money = money % 500;
print(Math.floor(money/200) + ' nota(s) de R$ 2.00');
money = money % 200;

print('MOEDAS:');
print(Math.floor(money/100) + ' moeda(s) de R$ 1.00');
money = money % 100;
print(Math.floor(money/50) + ' moeda(s) de R$ 0.50');
money = money % 50;
print(Math.floor(money/25) + ' moeda(s) de R$ 0.25');
money = money % 25;
print(Math.floor(money/10) + ' moeda(s) de R$ 0.10');
money = money % 10;
print(Math.floor(money/5) + ' moeda(s) de R$ 0.05');
money = money % 5;
print(Math.floor(money/1) + ' moeda(s) de R$ 0.01');
money = money % 1;


