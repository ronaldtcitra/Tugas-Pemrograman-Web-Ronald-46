BookApp
Aplikasi sederhana untuk mengelola buku


Pengembang
Nama        : Ronald Triarya Citra
Nim         : 2201020046
Prodi       : Informatika Pagi 2
Repository  : https://github.com/ronaldtcitra/Tugas-Pemrograman-Web-Ronald-46

Fitur
Menampilkan daftar buku
Tambah buku baru
Hapus buku dari daftar
Cari buku berdasarkan judul
Dark mode toggle 
Menampilkan Deskripsi buku saat buku ditekan

Struktur Folder menggunakan Atomic Design

BookApp/
   - assets/
   - src/
      - components/
         - atoms/
         - molecules/
         - pages/
            - HomePage.js
            - BookDetailPage.js
      - context/
         - ThemeContext.js
      - navigation/
         - AppNavigator.js
App.js
app.json

Instalasi

1. Clone repository
   git clone <https://github.com/ronaldtcitra/Tugas-Pemrograman-Web-Ronald-46>
   cd BookApp

2. Install dependencies
   npm install

Run Aplikasi
Expo Go :
npx expo start
- Scan QR Code 

Browser :
npx expo start --web
