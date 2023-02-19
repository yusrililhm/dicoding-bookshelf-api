# Kriteria 1 : Aplikasi menggunakan port 9000

Aplikasi yang Anda buat harus menggunakan port 9000. Jika komputer yang Anda gunakan untuk membuat submission tidak bisa memakai port 9000,  buatlah submission dengan port lain, lalu ketika submission hendak dikirimkan silakan ganti portnya ke 9000.

# Kriteria 2 : Aplikasi dijalankan dengan perintah npm run start.

Aplikasi yang Anda buat harus memiliki runner script start. Cara membuatnya, Anda tambahkan properti start ke dalam properti scripts pada <b>pacakge.json</b>.

# Kriteria 3 : API dapat menyimpan buku

API yang Anda buat harus dapat menyimpan buku melalui route:
- Method : POST
- URL : /books

# Kriteria 4 : API dapat menampilkan seluruh buku

API yang Anda buat harus dapat menampilkan seluruh buku yang disimpan melalui route:
- Method : GET
- URL: /books

# Kriteria 5 : API dapat menampilkan detail buku

API yang Anda buat harus dapat menampilkan seluruh buku yang disimpan melalui route:
- Method : GET
- URL: /books/{bookId}

# Kriteria 6 : API dapat mengubah data buku

API yang Anda buat harus dapat mengubah data buku berdasarkan id melalui route:
- Method : PUT
- URL : /books/{bookId}

# Kriteria 7 : API dapat menghapus buku

API yang Anda buat harus dapat menghapus buku berdasarkan id melalui route berikut:
- Method : DELETE
- URL: /books/{bookId}