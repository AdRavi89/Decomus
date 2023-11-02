# WeatherApp-MyBeta
Latihan Ngoding Bareng Decomus WeatherApp
<hr>
<p>Kerangka yang digunakan didalam HTML</p>
 <table>
        <tr>
            <th>Elemen HTML</th>
            <th>Deskripsi</th>
        </tr>
        <tr>
            <td>&lt;body&gt;</td>
            <td>Elemen tubuh dokumen HTML yang berisi konten yang akan ditampilkan pada halaman web.</td>
        </tr>
        <tr>
            <td>&lt;div class="container"&gt;</td>
            <td>Div utama yang digunakan untuk mengelompokkan konten halaman.</td>
        </tr>
        <tr>
            <td>&lt;div class="search-box"&gt;</td>
            <td>Div yang berisi kotak pencarian dan tombol pencarian.</td>
        </tr>
        <tr>
            <td>&lt;input type="text" placeholder="Enter Your Location" class="input-box"&gt;</td>
            <td>Input teks untuk memasukkan lokasi.</td>
        </tr>
        <tr>
            <td>&lt;button class="fa-solid fa-magnifying-glass" id="searchBtn"&gt;&lt;/button&gt;</td>
            <td>Tombol pencarian dengan ikon Font Awesome.</td>
        </tr>
        <tr>
            <td>&lt;div class="location-not-found"&gt;</td>
            <td>Div yang akan ditampilkan jika lokasi tidak ditemukan.</td>
        </tr>
        <tr>
            <td>&lt;h1&gt;Sorry, Location not found!!!&lt;/h1&gt;</td>
            <td>Judul pesan kesalahan.</td>
        </tr>
        <tr>
            <td>&lt;img src="/assets/404.png" alt="404 Error"&gt;</td>
            <td>Gambar kesalahan.</td>
           <tr>
            <td>&lt;div class="weather-body"&gt;</td>
            <td>Div yang berisi informasi cuaca.</td>
        </tr>
        <tr>
            <td>&lt;img src="/assets/cloud.png" alt="Weather Image" class="weather-img"&gt;</td>
            <td>Gambar cuaca.</td>
        </tr>
        <tr>
            <td>&lt;div class="weather-box"&gt;</td>
            <td>Div yang berisi informasi cuaca.</td>
        </tr>
        <tr>
            <td>&lt;p class="temperature"&gt;0 &lt;sup&gt;&deg;C&lt;/sup&gt;&lt;/p&gt;</td>
            <td>Paragraf yang menampilkan suhu dalam derajat Celsius.</td>
        </tr>
        <tr>
            <td>&lt;p class="description"&gt;light rain&lt;/p&gt;</td>
            <td>Paragraf yang menampilkan deskripsi cuaca.</td>
        </tr>
        <tr>
            <td>&lt;div class="weather-details"&gt;</td>
            <td>Div yang berisi detail cuaca.</td>
        </tr>
        <tr>
            <td>&lt;div class="humidity"&gt;</td>
            <td>Div yang berisi informasi kelembaban cuaca.</td>
        </tr>
        <tr>
            <td>&lt;i class="fa-sharp fa-solid fa-droplet"&gt;&lt;/i&gt;</td>
            <td>Ikon yang menunjukkan kelembaban.</td>
        </tr>
        <tr>
            <td>&lt;div class="text"&gt;</td>
            <td>Div yang berisi teks informasi.</td>
        </tr>
        <tr>
            <td>&lt;span id="humidity"&gt;45%&lt;/span&gt;</td>
            <td>Elemen yang menampilkan nilai kelembaban.</td>
        </tr>
        <tr>
            <td>&lt;p&gt;Humidity&lt;/p&gt;</td>
            <td>Paragraf yang menampilkan label "Humidity".</td>
        </tr>
        <tr>
            <td>&lt;div class="wind"&gt;</td>
            <td>Div yang berisi informasi kecepatan angin.</td>
        </tr>
        <tr>
            <td>&lt;i class="fa-solid fa-wind"&gt;&lt;/i&gt;</td>
            <td>Ikon yang menunjukkan kecepatan angin.</td>
        </tr>
        <tr>
            <td>&lt;div class="text"&gt;</td>
            <td>Div yang berisi teks informasi.</td>
        </tr>
        <tr>
            <td>&lt;span id="wind-speed"&gt;12Km/H&lt;/span&gt;</td>
            <td>Elemen yang menampilkan nilai kecepatan angin.</td>
        </tr>
        <tr>
            <td>&lt;p&gt;Wind Speed&lt;/p&gt;</td>
            <td>Paragraf yang menampilkan label "Wind Speed".</td>
        </tr>
    </table>
<hr>
<p>Kerangka yang digunakan didalam CSS</p>
    <table>
        <tr>
            <th>Elemen CSS</th>
            <th>Deskripsi</th>
        </tr>
        <tr>
            <td>*</td>
            <td>Selector universal yang memengaruhi semua elemen. Mengatur margin dan padding menjadi 0, box-sizing menjadi border-box, border menjadi none, outline menjadi none, dan font-family menjadi sans-serif.</td>
        </tr>
        <tr>
            <td>body</td>
            <td>Selector untuk elemen &lt;body&gt;. Mengatur tinggi minimum menjadi 100vh, menampilkan elemen sebagai flex container yang terpusat secara horizontal dan vertikal, dan mengatur latar belakang menjadi #3ec0e0.</td>
        </tr>
        <tr>
            <td>.container</td>
            <td>Selector untuk elemen dengan kelas "container". Mengatur lebar menjadi 400px, tinggi yang menyesuaikan kontennya, latar belakang menjadi #fff, diberi border-radius 12px untuk sudut yang melengkung, dan memiliki padding 28px.</td>
        </tr>
      <tr>
            <td>.search-box input</td>
            <td>Selector untuk elemen input di dalam elemen dengan kelas "search-box". Mengatur lebar menjadi 100%, ukuran font menjadi 20px, teks menjadi kapital, warna teks menjadi hitam, latar belakang menjadi #e6f5fb, padding 12px di atas dan bawah serta 16px di kiri dan kanan, diberi border-radius 14px.</td>
        </tr>
        <tr>
            <td>.search-box input ::placeholder</td>
            <td>Selector untuk pseudo-elemen placeholder pada elemen input di dalam elemen dengan kelas "search-box". Mengatur warna teks placeholder menjadi hitam.</td>
        </tr>
        <tr>
            <td>.search-box button</td>
            <td>Selector untuk elemen button di dalam elemen dengan kelas "search-box". Mengatur lebar dan tinggi menjadi 46px, latar belakang menjadi #e6f5fb, diberi border-radius 50%, menampilkan kursor pointer, dan ukuran font menjadi 20px.</td>
        </tr>
        <tr>
            <td>.search-box button:hover</td>
            <td>Selector untuk elemen button di dalam elemen dengan kelas "search-box" saat digerakkan (hover). Mengatur warna teks menjadi putih dan latar belakang menjadi #ababab.</td>
        </tr>
        <tr>
            <td>.weather-body</td>
            <td>Selector untuk elemen dengan kelas "weather-body". Mengatur tampilan elemen menjadi flex container dengan penataan konten dan arah kolom, serta margin atas sebesar 20px. Awalnya, elemen ini tidak ditampilkan (display: none).</td>
        </tr>
        <tr>
            <td>.weather-body img</td>
            <td>Selector untuk elemen &lt;img&gt; di dalam elemen dengan kelas "weather-body". Mengatur lebar menjadi 60%.</td>
        </tr>
        <tr>
            <td>.weather-box</td>
            <td>Selector untuk elemen dengan kelas "weather-box". Mengatur tampilan elemen ini dan seluruh kontennya menjadi tengah, serta margin atas sebesar 20px.</td>
        </tr>
        <tr>
            <td>.weather-box .temperature</td>
            <td>Selector untuk elemen dengan kelas "temperature" di dalam elemen "weather-box". Mengatur ukuran font menjadi 40px, ketebalan font menjadi 800, dan menambahkan elemen &lt;sup&gt; sebagai anak dengan ukuran font 20px dan ketebalan font 600.</td>
        </tr>
        <tr>
            <td>.weather-box .description</td>
            <td>Selector untuk elemen dengan kelas "description" di dalam elemen "weather-box". Mengatur ukuran font menjadi 20px, ketebalan font menjadi 700, dan mengubah teks menjadi kapital.</td>
        </tr>
        <tr>
            <td>.weather-details</td>
            <td>Selector untuk elemen dengan kelas "weather-details". Mengatur lebar menjadi 100% dan menampilkan elemen ini sebagai flex container dengan penataan konten terdistribusi seimbang di antara elemen-elemen anaknya.</td>
        </tr>
        <tr>
            <td>.humidity, .wind</td>
            <td>Selector untuk elemen dengan kelas "humidity" dan "wind". Mengatur tampilan elemen ini sebagai flex container dengan anak-anak yang diatur untuk menampilkan konten secara vertikal.</td>
        </tr>
        <tr>
            <td>.humidity</td>
            <td>Selector untuk elemen dengan kelas "humidity". Mengatur margin kiri sebesar 20px.</td>
        </tr>
        <tr>
            <td>.wind</td>
            <td>Selector untuk elemen dengan kelas "wind". Mengatur margin kanan sebesar 20px.</td>
        </tr>
        <tr>
            <td>.weather-details i</td>
            <td>Selector untuk elemen &lt;i&gt; di dalam elemen dengan kelas "weather-details". Mengatur ukuran font menjadi 36px.</td>
        </tr>
        <tr>
            <td>.weather-details .text</td>
            <td>Selector untuk elemen dengan kelas "text" di dalam elemen "weather-details". Mengatur margin kiri sebesar 10px dan ukuran font menjadi 16px.</td>
        </tr>
        <tr>
            <td>.text span</td>
            <td>Selector untuk elemen &lt;span&gt; di dalam elemen dengan kelas "text". Mengatur ukuran font menjadi 20px dan ketebalan font menjadi 700.</td>
        </tr>
        <tr>
            <td>.location-not-found</td>
            <td>Selector untuk elemen dengan kelas "location-not-found". Mengatur margin atas sebesar 20px dan menampilkan elemen ini sebagai flex container dengan penataan konten, arah kolom, dan posisi yang terpusat.</td>
        </tr>
        <tr>
            <td>.location-not-found h1</td>
            <td>Selector untuk elemen &lt;h1&gt; di dalam elemen dengan kelas "location-not-found". Mengatur ukuran font menjadi 20px, warna teks menjadi #6b6b6b, dan margin bawah sebesar 15px.</td>
        </tr>
        <tr>
            <td>.location-not-found img</td>
            <td>Selector untuk elemen &lt;img&gt; di dalam elemen dengan kelas "location-not-found". Mengatur lebar menjadi 80%.</td>
        </tr>
    </table>
<hr>
<p>Kerangka yang digunakan didalam Javascript</p>
