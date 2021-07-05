from PIL import Image

def resize_shorter(size: tuple, length: int) -> tuple:
    """
    サイズのタプル(height, width) の短いほうについて、縦横比を保ちながらリサイズする。
    例: resize_shorter((42, 36), 6) なら 短いほうは 36 なので、そっちを 6 にし、縦横比を合わせる。-> (7, 6)
    """

    long, short = size if size[0] > size[1] else reversed(size)
    after = (int(length * (long / short)), length)
    return after if size[0] > size[1] else reversed(after)

def crop_center(size: tuple, crop_size: tuple) -> tuple:
    """
    中心をcrop_sizeで切り抜く座標情報(左, 上, 右, 下)を取得する。
    """
    
    (left, right), (upper, lower) = (((a - b) // 2, (a + b) // 2) for a, b in zip(size, crop_size))
    return (left, upper, right, lower)

def center_squre(img: Image, length: int) -> Image:
    small = resize_shorter(img.size, length)
    crop_point = crop_center(small, (length, length))
    return img.resize(small).crop(crop_point)

center_squre(Image.open("./img/apex.png"), 50).save("./img/apex_square.png")