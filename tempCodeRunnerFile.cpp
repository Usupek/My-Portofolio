#include<iostream>
using namespace std;

int main(){
    int tahun;
    cin >> tahun;

    if(tahun%4 == 0 && tahun%100 != 0 || tahun%4 == 0 && tahun%100 == 0 && tahun%400 == 0 ){
        cout << tahun << " kabisat";
    }
    else{
        cout << tahun << " bukan kabisat";
    }

    return 0;
}