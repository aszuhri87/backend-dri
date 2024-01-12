# backend-dri
- run app: npm run start
- api dokumentasi (swagger) : http://localhost:8080/docs
- migrasi tabel: make migrate
- test: npm run test

# Bagaimana jika terdapat ribuan transaksi pada database?
- Jika terjadi banyak transaksi menurut saya tidak masalah sebab menggunakan query murni, disini saya juga tidak menggunakan 
looping sama sekali, sehingga secara performa seharusnya tidak begitu berpengaruh. Apalagi disini saya juga menggunakan postgresql dikarenakan database ini cocok untuk skala besar.

# Bagaimana jika terdapat banyak user yang mengakses API tersebut secara bersamaan?
- Hal ini juga tidak menjadi masalah apalagi teknologi yang dipakai cukup ringan dan tidak menggunakan resource yang berat.
selain itu api ini pun cukup sederhana sehingga tidak memberatkan system. Jika digunakan pada production pun tidak masalah
sepengalaman saya nodejs tidak terlalu memakan banyak resource tapi alangkah baiknya dibarengi dengan spesifikasi yang memadai
agar system/aplikasi tidak terjadi masalah yang berarti.

# Alasan memakai tech stack
- Alasan saya terutama menggunakan node js karna menurut saya node js cukup sederhana, selain itu juga sudah terbiasa menggunakannya. Saya juga menggunakan swagger docs openapi 3 yang saya sematkan langsung pada system agar mempermudah dalam pengecekan api, serta lebih terdokumentasi dengan baik, sehingga tidak perlu tambahan aplikasi semacam postman ataupun insomnia.

# Proses pengambilan solusi yang diambil ketika terdapat masalah dalam pembuatan
- Proses saya dalam mengambil langkah solusi adalah saya mencoba terus untuk menganalisa ulang pada masalah yang terjadi. Sebagai contoh saat saya sedang mengerjakan terdapat keambiguan bagaimana data transaksi diambil. Bayangan awal saya hanyalah list biasa tanpa mengelompokkannya pada nama customer, lalu setelah saya teliti kembali akan lebih efisien jika nama customer menjadi object utama dan kemudian data transaksi terlist dan tergroup didalam object customer, dengan melihat 1 nama customer sudah dapat melihat seluruh data transaksi yang sudah dibuat. 