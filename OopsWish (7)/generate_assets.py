import os
from PIL import Image, ImageDraw, ImageFont

def create_gradient_img(width, height, color1, color2, vertical=True):
    base = Image.new('RGB', (width, height), color1)
    top = Image.new('RGB', (width, height), color2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            ratio = y / height if vertical else x / width
            mask_data.append(int(255 * ratio))
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

# 1. Logo
logo = Image.new('RGBA', (400, 120), (255, 255, 255, 0))
d_logo = ImageDraw.Draw(logo)
# Draw heart & gift icon
d_logo.rounded_rectangle([15, 15, 95, 95], radius=24, fill=(142, 49, 87, 255))
d_logo.ellipse([35, 35, 75, 75], fill=(212, 175, 55, 255))
d_logo.text((120, 32), "OopsWish", fill=(142, 49, 87, 255))
d_logo.text((122, 70), "DIGITAL SURPRISES", fill=(212, 175, 55, 255))
logo.save('OopsWish/assets/logo/logo.png', 'PNG')

# 2. Hero Image
hero = create_gradient_img(900, 900, (255, 240, 245), (255, 249, 245))
d_hero = ImageDraw.Draw(hero)
# Draw glowing card background
d_hero.rounded_rectangle([100, 80, 800, 820], radius=40, fill=(255, 255, 255), outline=(217, 139, 168), width=3)
# Card header
d_hero.rounded_rectangle([140, 120, 760, 260], radius=20, fill=(142, 49, 87))
d_hero.text((220, 165), "SURPRISE FOR SOMEONE SPECIAL", fill=(255, 255, 255))
d_hero.text((310, 205), "Click To Open The Surprise Gift", fill=(212, 175, 55))
# Center interactive preview box
d_hero.rounded_rectangle([200, 300, 700, 680], radius=30, fill=(255, 249, 245), outline=(142, 49, 87), width=2)
d_hero.ellipse([370, 360, 530, 520], fill=(217, 139, 168))
d_hero.text((410, 425), "OPEN ME", fill=(255, 255, 255))
d_hero.text((250, 560), "Personalized Audio • Memories • 3D Wishes", fill=(142, 49, 87))
d_hero.text((270, 610), "Tap Anywhere On The Screen To Begin", fill=(100, 80, 90))
hero.save('OopsWish/assets/hero/hero-image.png', 'PNG')

# 3. Sample images
samples_meta = [
    ('OopsWish/assets/samples/birthday/birthday-01.jpg', 'Neon Neon Celebration', 'Birthday Surprise #01', (142, 49, 87), (217, 139, 168)),
    ('OopsWish/assets/samples/birthday/birthday-02.jpg', 'Golden Sparkle Wish', 'Birthday Surprise #02', (120, 30, 70), (212, 175, 55)),
    ('OopsWish/assets/samples/birthday/birthday-03.jpg', 'Retro Polaroid Memories', 'Birthday Surprise #03', (150, 60, 90), (240, 180, 200)),
    ('OopsWish/assets/samples/anniversary/anniversary-01.jpg', 'Romantic Rose Timeline', 'Anniversary Surprise #01', (130, 35, 65), (200, 110, 140)),
    ('OopsWish/assets/samples/anniversary/anniversary-02.jpg', 'Endless Love Constellation', 'Anniversary Surprise #02', (70, 25, 55), (170, 110, 150)),
    ('OopsWish/assets/samples/proposal/proposal-01.jpg', 'Will You Marry Me? 3D', 'Proposal Surprise #01', (142, 49, 87), (212, 175, 55)),
    ('OopsWish/assets/samples/proposal/proposal-02.jpg', 'Starry Secret Letter', 'Proposal Surprise #02', (85, 30, 60), (217, 139, 168)),
]

for path, title, sub, c1, c2 in samples_meta:
    img = create_gradient_img(640, 440, c1, c2)
    d = ImageDraw.Draw(img)
    # Draw frame
    d.rectangle([20, 20, 620, 420], outline=(255, 255, 255, 180), width=2)
    d.rounded_rectangle([50, 120, 590, 320], radius=16, fill=(255, 255, 255, 40))
    d.text((80, 180), title, fill=(255, 255, 255))
    d.text((80, 220), sub, fill=(255, 240, 200))
    d.text((80, 260), "Interactive Web Experience • Music • Photos", fill=(240, 240, 240))
    # Badge
    d.rounded_rectangle([40, 40, 220, 80], radius=12, fill=(212, 175, 55))
    d.text((60, 52), "LIVE PREVIEW", fill=(20, 20, 20))
    img.save(path, 'JPEG', quality=90)

print('All assets created successfully.')
